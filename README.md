# 🎯 **PROYECTO: AMIGO SECRETO**

Pequeña app web para ingresar nombres de tus amigos y realizar un sorteo aleatorio **sin repetición**. Ideal para practicar **inputs**, **arreglos**, **condicionales**, **funciones** y **manipulación del DOM**.

---

## 🚀 ¿Cómo ejecutar?
1. Asegúrate de tener estos archivos en la misma carpeta:
   - `index.html`
   - `style.css`
   - `app.js`
2. **Abre** `index.html` en tu navegador (doble clic) o usa una extensión tipo **Live Server**.
3. ¡Listo! Verás el campo de texto, los botones y las listas.

---

## 🧩 ¿Cómo se usa?
1. **Escribe un nombre** en el campo de texto.
2. Haz clic en **“Añadir”** (o presiona **Enter**).
3. Repite hasta tener todos los nombres que quieras.
4. Presiona **“Sortear”** para elegir un **amigo secreto** al azar.
5. El nombre **elegido se elimina** de la lista, así **no se repite** en próximos sorteos.
6. Cuando **se acaben** los nombres, verás el mensaje: **“Sorteo terminado. Puedes agregar nuevos nombres para empezar otra vez.”**
7. Puedes volver a **agregar** nuevos nombres cuando quieras y seguir sorteando.

---

## ✅ Reglas y validaciones
- No permite **nombres vacíos** o con solo espacios (muestra `alert`).
- **No repite** nombres sorteados (se eliminan del arreglo y de la lista visual).
- Si intentas sortear sin nombres, muestra `alert` pidiendo que agregues primero.

---

## 🧠 ¿Qué hay dentro?
- **Estado**: `let amigos = [];` → arreglo con los nombres.
- **Funciones principales** (todas en `app.js`):
  - `agregarAmigo()` → Toma el valor del input, **valida** y **agrega** al arreglo; limpia el input y llama a **`actualizarLista()`**.
  - `actualizarLista()` → Recorre el arreglo y dibuja los `<li>` dentro de **`<ul id="listaAmigos">`**.
  - `sortearAmigo()` → Elige un nombre al azar, lo **muestra** en **`<ul id="resultado">`**, lo **elimina** del arreglo y llama a **`actualizarLista()`**; si ya no quedan nombres, muestra “Sorteo terminado”.
- **Calidad de vida**: presionar **Enter** dentro del input también agrega el nombre.

---

## 🧪 Estructura del HTML (resumen de IDs usados)
- `#amigo` → `<input>` para ingresar nombres.
- `#listaAmigos` → `<ul>` donde se muestran los nombres por sortear.
- `#resultado` → `<ul>` donde se muestra el nombre sorteado y, al final, el mensaje de “Sorteo terminado”.

> Asegúrate de tener el script en el HTML, por ejemplo:
```html
<script src="app.js" defer></script>
```
> Y de vincular los botones (por `onclick` o `addEventListener`) a **`agregarAmigo()`** y **`sortearAmigo()`**.

---