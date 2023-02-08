package com.code;

import com.code.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
public class BankingBackendUserServiceApplication {


	public static void main(String[] args) {
		SpringApplication.run(BankingBackendUserServiceApplication.class, args);
	}

}
