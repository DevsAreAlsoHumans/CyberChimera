package app;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

public class DbConnctor {
	String jdbcUrl = "jdbc:mysql://localhost:3306/cyberchimerajava";
    String user = "root";
    String password = "";
    
    public ArrayList<User> addUser(User userAdd) {
    	 try {
    	       
    	        Class.forName("com.mysql.cj.jdbc.Driver");
    	        
    	        
    	        Connection connection = DriverManager.getConnection(jdbcUrl, user, password);

    	        if (connection != null) {
    	            System.out.println("Connexion a la base de donnees réussie !");
    	        } else {
    	            System.out.println("La connexion a la base de donnees a échoué.");
    	        }
    	        
    	        String sql = "INSERT INTO user (name, email, password)"
            			+ "VALUES (?, ?, ?)";
            	PreparedStatement preparedStatement = connection.prepareStatement(sql);        	
            	
            	preparedStatement.setString(1, userAdd.getNom());
            	preparedStatement.setString(2, userAdd.getEmail());
            	preparedStatement.setString(3, userAdd.getPassword());

            	// executer 
            	int lignesAffectees = preparedStatement.executeUpdate();
            	
            	if ( lignesAffectees > 0) {
            		System.out.println("L'insertion a r�ussi");
            		preparedStatement.close();
            		PreparedStatement preparedStatement2 = connection.prepareStatement("SELECT * FROM user"); 

    	            ResultSet resultSet = preparedStatement2.executeQuery();
    	            ArrayList<User> users = new ArrayList<User>();
    	            while (resultSet.next()) {
    	                users.add(new User(resultSet.getString("name"),resultSet.getString("email"),resultSet.getString("password")));
    	            }
	                connection.close();
	                return users;
            	       
            	}else {
            		System.out.println("L'insertion a �chou�");
            		
            	}
    	       
    	        connection.close();
    	    } catch (Exception e) {
    	        // Gestion des exceptions li�es au chargement du pilote JDBC
    	        e.printStackTrace();
    	        System.out.println("marche pas du tout");
    	    } 
    	 return null;
    }
   
}
