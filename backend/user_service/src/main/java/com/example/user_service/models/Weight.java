package com.example.user_service.models;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Document(collection = "weight")
public class Weight {
    @Id
    private String id;


    private String userId;
    private float weightValue;
    private LocalDate date;

     // Standardkonstruktor (krävs av Spring Data MongoDB)
    public Weight() {
    }
     // Konstruktor
    public Weight(String userId, float weightValue, LocalDate date) {
        this.userId = userId;
        this.weightValue = weightValue;
        this.date = date;
    }
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
    public float getWeight() {
        return weightValue;
    }

    // Setter för weightValue
    public void setWeight(float weightValue) {
        this.weightValue = weightValue;
    }

    // Getter för date
    public LocalDate getDate() {
        return date;
    }

    // Setter för date
    public void setDate(LocalDate date) {
        this.date = date;
    }
}