pip install daphne
sudo apt install redis-server# Setting Up a Django Channels Application with Daphne and Redis

## Prerequisites

- Python 3.x
- pip (Python package installer)
- Redis server installed and running

## Step-by-Step Instructions

### 1. Set Up a Virtual Environment

Create and activate a virtual environment to manage dependencies:

```bash
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
```
```bash
pip install django channels daphne channels_redis
```
```bash
redis-server
```
```bash
daphne -p 8000 support.asgi:application
```


