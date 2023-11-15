package app;

import java.util.ArrayList;
import java.util.Scanner;

public class main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scan = new Scanner(System.in);

		System.out.println("entre un nom");
		String nom = scan.nextLine();
		System.out.println("entre un email");
		String email = scan.nextLine();
		System.out.println("entre un mdp");
		String mdp = scan.nextLine();
		User user = new User(nom,email,mdp);
		
		DbConnctor con = new DbConnctor();
		ArrayList<User> users = con.addUser(user);
		System.out.println(user);
		boolean isConnected = false;
		
		while (!isConnected) {
			System.out.println("Vous n'etes pas connecté");
			System.out.println("entre un nom");
			String nomLogin = scan.nextLine();
			System.out.println("entre un email");
			String emailLogin = scan.nextLine();
			System.out.println("entre un mdp");
			String mdpLogin = scan.nextLine();	
			User userLogin = new User(nomLogin,emailLogin,mdpLogin);
			for(int i=0;i<users.size();i++) {
				if(userLogin.getEmail().equals(users.get(i).getEmail()) && userLogin.getPassword().equals(users.get(i).getPassword())) {
					isConnected = true;
					user = userLogin;
					break;
				}

			}
						
		}
		System.out.println("Vous etes Connecté");
	}

}
