package routes

import (
	"auth/controllers"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/mongo"
)

func AuthRoutes(r *gin.Engine, userCollection *mongo.Collection) {
	r.POST("/register", func(c *gin.Context) {
		controllers.Register(c, userCollection)
	})
	r.POST("/login", func(c *gin.Context) {
		controllers.Login(c, userCollection)
	})
	r.POST("/refresh", func(c *gin.Context) {
		controllers.RefreshToken(c, userCollection)
	})
}
