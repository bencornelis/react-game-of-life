cd build
aws s3 sync ./ s3://$S3_BUCKET --acl public-read --cache-control "max-age=86400"
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/index.html"
