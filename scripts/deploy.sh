cd build
aws s3 sync ./ s3://conway-game-of-life --acl public-read --cache-control "max-age=86400"
