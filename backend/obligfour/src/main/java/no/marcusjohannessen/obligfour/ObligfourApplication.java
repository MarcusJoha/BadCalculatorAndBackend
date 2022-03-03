package no.marcusjohannessen.obligfour;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class ObligfourApplication {

	private static final Logger logger = LoggerFactory.getLogger(ObligfourApplication.class);
	public static void main(String[] args) {
		logger.info("Starting...");
		SpringApplication.run(ObligfourApplication.class, args);
	}
}
