gcloud beta functions deploy generatePdf \
    --trigger-http \
    --runtime nodejs10 \
    --memory 1024MB \
    --region europe-west1