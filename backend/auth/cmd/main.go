package main

import (
	"context"
	"log"
	"time"

	"auth/config"
	"auth/routes"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func main() {
	config.LoadEnv()
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	client, err := mongo.Connect(ctx, options.Client().ApplyURI(config.GetMongoURI()))

	if err != nil {
		log.Fatal(err)
	}

	if err != nil {
		log.Fatal(err)
	}

	db := client.Database("auth_db")
	userCollection := db.Collection("users")

	r := gin.Default()
	routes.AuthRoutes(r, userCollection)

	port := config.GetPort()
	r.Run(":" + port)
}
