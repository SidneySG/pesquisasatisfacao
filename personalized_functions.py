import re


def normalizar_matricula_mz(matricula):
    matricula = re.sub(r"\s+", "", matricula, flags=re.UNICODE).upper()
    letras = " ".join(re.findall("[a-zA-Z]+", matricula))
    letras = letras.split(" ")
    numeros = " ".join(re.findall(r'\d+', matricula))

    matriculaNormalizada = ""
    if(len(letras) > 1):
        matriculaNormalizada = letras[0]+" "+numeros+" "+letras[1]
    else:
        matriculaNormalizada = letras[0]+"-"+numeros[:2]+"-"+numeros[-2:]

    return matriculaNormalizada