package com.example.user_service.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WeightRepository extends MongoRepository<Weight, ObjectId> {
    // Anpassa och lägg till metodsignaturer för specifika databasoperationer
    // Exempel:
    // public List<YourModel> findByLastName(String lastName);
    // public List<YourModel> findByAgeGreaterThan(int age);
}
