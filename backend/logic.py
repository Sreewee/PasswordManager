from cryptography.fernet import Fernet
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
from cryptography.hazmat.primitives import hashes
import base64
import getpass
import os

# Get password from user
password = getpass.getpass("Enter your encryption password: ").encode()

# Generate key from password
salt = os.urandom(16)
kdf = PBKDF2HMAC(
    algorithm=hashes.SHA256(),
    length=32,
    salt=salt,
    iterations=100000,
)
key = base64.urlsafe_b64encode(kdf.derive(password))
f = Fernet(key)

# Your data
data = b"Hi my name is Sreee"

# Encrypt
token = f.encrypt(data)
print("Encrypted:", token)

# Decrypt
try:
    decrypted = f.decrypt(token)
    print("Decrypted:", decrypted.decode())
except:
    print("Decryption failed - wrong password or corrupted data")