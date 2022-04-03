# Step 1: Use official lightweight Python image as base OS.
FROM python:3.9

# Step 2. Copy local code to the container image.
ENV PORT 8080
ENV HOST 0.0.0.0
ENV APP_HOME /app
WORKDIR $APP_HOME
COPY . ./

# Step 3. Install production dependencies.
RUN pip install --upgrade pip
 
RUN pip install -r requirements.txt

# Step 4: Run the web service on container startup using gunicorn webserver.
CMD exec gunicorn --bind 0.0.0.0:$PORT --workers 1 --worker-class uvicorn.workers.UvicornWorker  --threads 8 app.main:app
