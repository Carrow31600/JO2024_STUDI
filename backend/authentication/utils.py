import secrets

# GENERATION DE LA CLE DE SECURITE POUR LE USER
def generate_secure_key(length=24):
    return secrets.token_urlsafe(length)
