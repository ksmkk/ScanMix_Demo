# DEMO EDUCATIVA: este archivo no tiene provider ni automatización de despliegue.
# Representa deliberadamente una configuración insegura para probar DevGotchi.
resource "aws_s3_bucket" "public_demo" {
  bucket = "devgotchi-fake-public-demo"
  acl    = "public-read"
}

resource "aws_s3_bucket_public_access_block" "public_demo" {
  bucket                  = aws_s3_bucket.public_demo.id
  block_public_acls       = false
  block_public_policy     = false
  restrict_public_buckets = false
}
