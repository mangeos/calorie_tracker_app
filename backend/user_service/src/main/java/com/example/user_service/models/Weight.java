package com.example.user_service.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.TypeAlias;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document(collection = "weights")
@TypeAlias("Weight")
@Data
public class Weight {
    @Id
    private String id;

    private String userId;
    private String date;
    private double weightValue;
    private double weightGoal;

    // Getter för id
    public String getId() {
        return id;
    }

    // Setter för id
    public void setId(String id) {
        this.id = id;
    }

    // Getter för userId
    public String getUserId() {
        return userId;
    }

    // Setter för userId
    public void setUserId(String userId) {
        this.userId = userId;
    }

    // Getter för weightValue
    public double getWeight() {
        return weightValue;
    }

    // Setter för weightValue
    public void setWeight(double weightValue) {
        this.weightValue = weightValue;
    }

    // Getter för date
    public String getDate() {
        return date;
    }

    // Setter för date
    public void setDate(String date) {
        this.date = date;
    }

    // Getter för weightGoal
    public double getWeightGoal() {
        return weightGoal;
    }

    // Setter för weightGoal
    public void setWeightGoal(double weightGoal) {
        this.weightGoal = weightGoal;
    }
}