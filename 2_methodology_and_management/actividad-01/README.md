* Primera Parte: Creación de un proyecto en GitHub y uso de las ramas

0. Creación del proyecto actividad-01 en Github: Como el repositorio de proyectos del máster ya se encuentra creado, se crea un directorio nuevo que tendrá los incrementos para la actividad 1.

<img src="./assets/repopng.png"/>
<img src="./assets/activity_1.png"/>

1. Crear las tareas en el Kanban de GitHub que consideres necesarias para este proyecto.

<img src="./assets/kanban_set_up.png" />
<img src="./assets/kanban.png" />
<img src="./assets/moved_kanban.png" />
<img src="./assets/task.png" />

2. Creación de la rama develop a partir de main
   (En mi caso, la rama master)
   <img src="./assets/branches_develop.png" />
3. Creación de la rama feature-1 y añadir la clase A con los atributos: foo bar (tal como se ve en la imagen Crear Clase A)

<img src="./assets/feature-1_branch.png" />
<img src="./assets/add_class_a.png" />
<img src="./assets/commit_class_a.png" />
<img src="./assets/pushf1.png" />

4. Mergear feature-1 con develop
<img src="./assets/f1MR.png" />
<img src="./assets/f1MRD.png" />
<img src="./assets/f1MRM.png" />

5. Mergear develop con main (master) y generar tag v1.0
<img src="./assets/f1MRDD=>M.png" />
<img src="./assets/f1MRMD=>M.png" />
<img src="./assets/declare_first_tag.png" />
<img src="./assets/first_tag.png" />

* Segunda Parte: Merge de dos ramas y posible resolución de conflictos

6 y 7. Creación de la rama feature-2 y añadir la clase B. Creación de la rama feature-3 y añadir la clase C.

<img src="./assets/feature-2.png" />
<img src="./assets/feature-2-commit.png" />

8 y 9. Mergear feature-2 y feature-3 con develop.

![Alt text](assets/pre-double-mr.png)
![Alt text](assets/f2-merged.png)
![Alt text](assets/f3-confict.png)
![Alt text](assets/f3-conflict-slvd.png)
![Alt text](assets/f3-to-merge.png)

10. Mergear develop con main y creación de la etiqueta v2.0.

![Alt text](assets/dev-to-master.png)
![Alt text](assets/tag-v2.png)

11. Creación de rama hotfix-1 a partir de main y añadir un atributo lorem en clase A.

![Alt text](assets/switch-hotfix.png)
![Alt text](assets/lorem.png)

12. Mergear rama hotfix-1 con main y creación de etiqueta v2.1
![Alt text](image.png)
![Alt text](image-1.png)