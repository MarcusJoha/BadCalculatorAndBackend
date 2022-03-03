package no.marcusjohannessen.obligfour.model;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class Equation {

    private int firstNumber;
    private int secondNumber;
    private char operator;
    private double answer;
    private List<String> calculations = new ArrayList<>();

    public int getFirstNumber() {
        return firstNumber;
    }

    public int getSecondNumber() {
        return secondNumber;
    }

    public char getOperator() {
        return operator;
    }

    public double getAnswer() {
        return answer;
    }

    public void setAnswer(double answer) {
        this.answer = answer;
    }

    public List<String> getCalculations() {
        return calculations;
    }

    public void addCalculation(String answer) {
        this.calculations.add(answer);
    }
}
