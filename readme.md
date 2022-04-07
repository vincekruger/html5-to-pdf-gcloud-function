# HTML5 to PDF Generator on Google Cloud Functions

> Using [html5-to-pdf](https://www.npmjs.com/package/html5-to-pdf) and [chrome-aws-lambda](https://www.npmjs.com/package/chrome-aws-lambda) packages

## Getting started

Clone the repository and run to setup your cloud function.

```
gcloud beta functions deploy generatePdf \
    --trigger-http \
    --runtime nodejs14 \
    --memory 1024MB \
    --region europe-west1
```

## Usage

```
POST /generatePdf HTTP/1.1
Content-Type: text/html
Host: {your-project}.cloudfunctions.net
Content-Length: {content-length}

{binary html content}
```

## Configuration

See: https://github.com/peterdemartini/html5-to-pdf