![image](https://github.com/user-attachments/assets/7edd5a6e-579a-4816-9e39-58d2e7a78499)
![image](https://github.com/user-attachments/assets/2c08851d-5b18-4834-ab0e-336a5014fc87)
![image](https://github.com/user-attachments/assets/48345306-0342-4cce-a760-e8cf5028c935)


# Compilarlo localmente

Dentro del directorio donde se clonó el repositorio:

1. (opcional) Tener una instancia del [backend](https://github.com/J053Fabi0/intelimotor-backend) corriendo
   localmente.
1. Ejecutar el comando `npm i`
1. `cd src/utils`
1. `cp constants.temp.ts constants.ts` y editar `constants.ts` con la dirección local del backend o usar la que
   viene por defecto. No se debe añadir una diagonal (`/`) al final de la URL.

Para correr el código a partir de ahora se usa el comando `npm run start`.
