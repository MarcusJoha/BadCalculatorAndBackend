package no.marcusjohannessen.obligfour.service;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class Calculation {

    private double answer;
    private String equation;
    private List<String> calculations = new ArrayList<>();

    public double getAnswer() {
        return answer;
    }

    public List<String> getCalculations() {
        return calculations;
    }

    public void addCalculation(String answer) {
        this.calculations.add(answer);
    }

    public double calculate(int num1, int num2, char op){

        String stringAnswer = "";
        if (op == '+'){
            answer = num1 + num2;
            stringAnswer = num1 + " + " + num2 + " = " + answer;
        }
        else if (op == '-'){
            answer = num1 - num2;
            stringAnswer = num1 + " - " + num2 + " = " + answer;
        }
        else if (op == '*'){
            answer = num1 * num2;
            stringAnswer = num1 + " * " + num2 + " = " + answer;
        }
        else if (op == '/'){
            answer = num1 / num2;
            stringAnswer = num1 + " / " + num2 + " = " + answer;
        }
        calculations.add(stringAnswer);
        return answer;
    }
}
