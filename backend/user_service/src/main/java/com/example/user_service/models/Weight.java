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
    private float weightValue;
    private String date;

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
    public String getDate() {
        return date;
    }

    // Setter för date
    public void setDate(String date) {
        this.date = date;
    }
}