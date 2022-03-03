package no.marcusjohannessen.obligfour.controller;


import no.marcusjohannessen.obligfour.model.Equation;
import no.marcusjohannessen.obligfour.service.Calculation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class CalculatorController {
    Logger logger = LoggerFactory.getLogger(CalculatorController.class);

    @Autowired
    Calculation service;

    @GetMapping("/calculation")
    public double getAnswer() {
        logger.info("last answer returned");
        return service.getAnswer();
    }

    @GetMapping("/calculation/all")
    public List<String> getCalculations() {
        return service.getCalculations();
    }

    @PostMapping( "/calculation")
    public Equation postCalculation(@RequestBody Equation equation) {
        // maps the HttpRequest body to a transfer or domain object,
        // enabling automatic deserialization of the inbound HttpRequest onto a Java object
        try {
           double answer = service.calculate(equation.getFirstNumber(), equation.getSecondNumber(), equation.getOperator());
            // service.addCalculation(answer);
            equation.setAnswer(answer);
            logger.info("post calculation called");
        } catch (Exception e) {
            logger.warn(e.getMessage());
        }
        return equation;
    }
}
