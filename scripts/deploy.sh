cd build
aws s3 sync ./ s3://$S3_BUCKET --acl public-read --cache-control "max-age=86400"
