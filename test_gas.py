import requests

url = "https://script.google.com/macros/s/AKfycbwLrq1GUmSq2ZlDtRD2Ma54VJrk8RdJG40vC2bODcjJNRSU6M3_nZFfNj_T1xFx2uuN/exec"
data = {
    "email": "teste_manus@example.com",
    "data": "12/02/2026 10:00:00",
    "aceite": "Sim",
    "data_aceite": "12/02/2026 10:00:00",
    "origem": "Teste Automatizado Manus"
}

print(f"Testando URL: {url}")
try:
    # Testando POST
    response = requests.post(url, data=data, allow_redirects=True)
    print(f"Status Code (POST): {response.status_code}")
    print(f"Resposta (POST): {response.text}")
except Exception as e:
    print(f"Erro no POST: {e}")

try:
    # Testando GET (caso o doPost não esteja sendo chamado corretamente)
    response = requests.get(url, params=data, allow_redirects=True)
    print(f"\nStatus Code (GET): {response.status_code}")
    print(f"Resposta (GET): {response.text}")
except Exception as e:
    print(f"Erro no GET: {e}")
