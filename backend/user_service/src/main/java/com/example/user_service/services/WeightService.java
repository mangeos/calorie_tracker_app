package com.example.user_service.services;

import com.example.user_service.models.Weight;
import com.example.user_service.repository.WeightRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WeightService {

    @Autowired
    private WeightRepository repository;

    public List<Weight> findAllWeights() {
        return repository.findAll();
    }

    public List<Weight> deleteWeightByUserId(String userId) {
        return repository.deleteWeightByUserId(userId);
    }

    public Weight addWeight(Weight weight) {
        return repository.insert(weight);
    }
}
