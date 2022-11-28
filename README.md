# Z1 Player


## Hola, soy Fernando Alvarez

A continuación dejo la resolución del **Front-End Coding Challenge**, en este enlace:
### [Demo Z1 Player](https://player-ui-front-end-challenge-vbg7.vercel.app/)

La aplicación esta montada en NextJS, y tiene una capa de datos gestionada por GraphQL a través de Apollo. Esta capa de datos se consume en la aplicación a traves custom de hooks.

Apollo, ademas de la gestión de datos es utilizado como store de datos. Este store de datos nos provee de reactividad para el resto de la aplicación, haciendo el uso de datos accesible de una manera muy dinámica.

Luego en la parte de tests, añadí unos tests unitarios simples de utilidades con Jest.

<br/>

## Instalación Local
Clona este repositorio y luego desde la raiz del proyecto ejecuta:
```bash
yarn install
```

Una vez instaladas las dependencias, levanta el proyecto de manera local:
```bash
yarn dev
```

## Challenge Check list

### Feature #1 : Display the song list ✅
* Mostrar Canciones de acuerdo a los diseños
* Persistencia de Favoritos: Persistencia en local storage + variables reactivas de Apollo.

### Feature #2: Let's the music play! ✅
Implementación 'artesanal' del reproductor 😎
Implementa el uso de observables para reducir *re-renders* en el componente progress bar.

* Al hacer **Play/Pause** desde un `<SongItem/>`, se reproduce o pausa en el `<Player/>`
* Al hacer **Play/Pause** desde el `<Player/>`, lo refleja en el `<SongItem/>`
* Al modificar la barra de progreso actualiza el estado de la canción, y su informacion (mm:ss)
* **Prev Button**, funcionalidad similar a cualquier reproductor: Un click, reinicia la canción, doble click vuelve a la anterior o la última de la lista.
* **Next Button**, se mueve a la siguiente canción. Si está en la última canción de la lista se mueve a la primera.

### Feature #3: Search ✅
Búsqueda de canciones, refresca resultados manteniendo la canción que se está reproduciendo de fondo.
Añadí un mensaje para el usuario cuando la búsqueda no contiene resultados.

### Make things work! 👌

- User should be able to:
  - see list of songs ✅
  - listen to any song they choose ✅
  - play and pause song ✅
  - control track ✅
  - mark a song as favorite ✅
  - move between songs with the prev/next buttons of the audio player ✅


### Go for an extra mile! 🔥

- App should look good in all window sizes ✅
- Add unit or integration tests ✅
- Add some micro interactions and animations ✅
- Be careful about accessibility ✅
- Be careful about your markup semantics ✅
- Storybook updated with **SongItem** ✅

<br/>

## Contacto
### Fernando Alvarez

[Linkedin](https://www.linkedin.com/in/alvarezfer/)

[feralvarz@gmail.com](mailto:feralvarz@gmail.com)
