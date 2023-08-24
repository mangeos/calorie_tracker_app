package com.example.user_service.services;

import com.example.user_service.models.Weight;
import com.example.user_service.repository.WeightRepository;

import org.apache.el.stream.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Service;
import org.springframework.data.mongodb.core.query.Query;

import java.util.ArrayList;
import java.util.List;

@Service
public class WeightService {

    @Autowired
    private WeightRepository repository;

    private final MongoTemplate mongoTemplate;

    @Autowired
    public WeightService(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    public List<Weight> findAllWeights(String userId) {
        Query query = new Query(Criteria.where("userId").is(userId));
        List<Weight> weights = mongoTemplate.find(query, Weight.class);
        return weights != null ? weights : new ArrayList<>();
    }

    public List<Weight> updateWeightByUserIdAndDate(String userId, String date,
            String newWeightValue) {
        List<Weight> weights = repository.findByUserIdAndDate(userId, date);

        if (!weights.isEmpty()) {
            for (Weight weightToUpdate : weights) {
                weightToUpdate.setWeightValue(Double.parseDouble(newWeightValue));
                repository.save(weightToUpdate);
            }
            return weights; // Returnera den uppdaterade listan
        } else {
            // Hantera fallet om vikten inte finns
            return new ArrayList<>();
        }
    }

    public List<Weight> deleteWeightByUserId(String userId) {
        return repository.deleteWeightByUserId(userId);
    }

    public Weight addWeight(Weight weight) {
        return repository.insert(weight);
    }
}
