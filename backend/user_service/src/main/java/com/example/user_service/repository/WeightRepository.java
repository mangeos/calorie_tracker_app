package com.example.user_service.repository;

import com.example.user_service.models.Weight;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface WeightRepository extends MongoRepository<Weight, String> {

    List<Weight> deleteWeightByUserId(String userId);
}
