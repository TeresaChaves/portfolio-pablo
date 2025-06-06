import { useParams } from "react-router-dom";

export function useObraData() {
  const { id } = useParams();

  const obras = {
    cucaracha: {
      title: "Cucaracha || Pablo Chaves",
      description:
        "Obra 'Cucaracha' de Pablo Chaves, una reflexión escénica intensa.",
      ficha: (
        <div className="container-ficha-centrada">
          <i className="name-ficha">
            Estrenada en Teatro Español y Quique San Francisco
          </i>
          <i>
            Dramaturgia y dirección: <span>Javier Ballesteros</span>
          </i>
          <i>
            Escenografía y vestuario: <span>Pablo Chaves</span>
          </i>
          <i>
            Reparto:
            <span>
              Laura Barceló, Pablo Chaves, Eva Chocrón, Virginia de la Cruz,
              Matilde Gimeno, María Jáimez y June Velayos
            </span>
          </i>
          <i>
            Ayte. dirección: <span>Víctor Nacarino</span>
          </i>
          <i>
            Música: <span>Isabel Arranz</span>
          </i>
          <i>
            Coor. producción: <span>Raúl de la Torre</span>
          </i>
          <i>
            Ayudante de producción: <span>Juan Seade</span>
          </i>
          <i>
            Cartelería: <span>Alejandra Sánchez-Mateos</span>
          </i>
          <i>
            Producción: <span>Mujer en obras</span>
          </i>
        </div>
      ),
      fichaMobile: (
        <div className="container-ficha-centrada">
          <i className="name-ficha">
            Estrenada en Teatro Español y Quique San Francisco
          </i>
          <i>
            Dramaturgia y dirección: <span>Javier Ballesteros </span>
          </i>
          <i>
            Escenografía y vestuario: <span>Pablo Chaves</span>
          </i>
          <i>
            Reparto:
            <span>
              Laura Barceló, Pablo Chaves, Eva Chocrón, Virginia de la Cruz,
              Matilde Gimeno, María Jáimez y June Velayos{" "}
            </span>{" "}
          </i>{" "}
          <i>
            Ayte. dirección <span>Víctor Nacarino </span> /Música:
            <span>Isabel Arranz </span>
          </i>{" "}
          <i>
            Coor. producción: <span>Raúl de la Torre</span> / Ayudante de
            producción: <span>Juan Seade </span>
          </i>
          <i>
            Cartelería: <span>Alejandra Sánchez-Mateos</span>
          </i>
          <i>
            Producción: <span>Mujer en obras</span>
          </i>
        </div>
      ),
    },
    gaviotas: {
      title: "Gaviotas || Pablo Chaves",
      description:
        "Obra 'Gaviotas' de Pablo Chaves, explorando la libertad y el mar.",
      ficha: (
        <div className="container-ficha-centrada">
          <i className="name-ficha">
            {" "}
            <i className="name-ficha">Estrenada en Exlímite y Nave 73</i>
          </i>
          <i>
            Dirección: <span>Amanda Recacha y Rodolfo Sacristán / </span> /
            Escenografía y vestuario: <span>Pablo Chaves Maza</span>
          </i>
          <i>
            Autoría: <span>Adaptación libre por Gritadero Teatro / </span>
            Producción:<span>Gritadero Teatro </span>
          </i>
          <i>
            Iluminación: <span>Antonio Colomo Gragera</span>
          </i>{" "}
          <i>
            Diseño de cartel: <span>Emiliano Cano / </span> Fotografía
            <span>Luz Soria</span>
          </i>{" "}
          <i>
            Prensa: <span>María Díaz</span>
          </i>{" "}
        </div>
      ),
      fichaMobile: (
        <div className="container-ficha-centrada">
          <i className="name-ficha">
            {" "}
            <i className="name-ficha">Estrenada en Exlímite y Nave 73</i>
          </i>
          <i>
            Dirección: <span>Amanda Recacha y Rodolfo Sacristán / </span> /
            Escenografía y vestuario: <span>Pablo Chaves Maza</span>
          </i>
          <i>
            Autoría: <span>Adaptación libre por Gritadero Teatro / </span>
            Producción:<span>Gritadero Teatro </span>
          </i>
          <i>
            Iluminación: <span>Antonio Colomo Gragera</span>
          </i>{" "}
          <i>
            Diseño de cartel: <span>Emiliano Cano / </span> Fotografía
            <span>Luz Soria</span>
          </i>{" "}
          <i>
            Prensa: <span>María Díaz</span>
          </i>{" "}
        </div>
      ),
    },
    marcela: {
      title: "Marcela || Pablo Chaves",
      description:
        "Obra 'Marcela' de Pablo Chaves, explorando la libertad y el mar.",
      ficha: (
        <div className="container-ficha-centrada">
          {" "}
          <i className="name-ficha">Estrenada en la Sala Cervantina.</i>
          <i>
            Dirección: <span>Leticia Dolera / </span> Dramaturgia:{" "}
            <span>María Folguera</span>
          </i>
          <i>
            Diseño espacio escénico <span>Pablo Chaves</span>
          </i>
          <i>
            Diseño de iluminación:<span>Lola Barroso </span> / Ayudante de
            iluminación: <span>Elena Alejandre</span>
          </i>{" "}
          <i>
            Diseño de vestuario: <span>Marta Murillo</span> / Diseño de sonido:
            <span>Pablo Martínez</span>
          </i>{" "}
          <i>
            Directora de producción: <span>Milena Suárez</span> / Ayudante de
            producción: <span>Paula Pina</span>
          </i>
          <i>
            Equipo S. Cervantina: <span>Ana Carrera, Jaime Saavedra</span> /
            Edición de visuales: <span>Ana Caro</span>
          </i>
          <i>
            Diseño gráfico: <span>Jesús Bosqued </span>/Interpretación:{" "}
            <span>Celia Freijeiro</span>
          </i>
          <i>Una producción de la Sociedad Cervantina</i>
          <i>con el apoyo de INAEM y Fundación La Caixa</i>
        </div>
      ),

      fichaMobile: (
        <div className="container-ficha-centrada">
          <i className="name-ficha">Estrenada en la Sala Cervantina.</i>
          <i>
            Dirección: <span>Leticia Dolera / </span> Dramaturgia:{" "}
            <span>María Folguera</span>/ Diseño espacio escénico{" "}
            <span>Pablo Chaves</span>
          </i>
          <i>
            Diseño de iluminación:<span>Lola Barroso </span> / Ayudante de
            iluminación: <span>Elena Alejandre</span>
          </i>{" "}
          <i>
            Diseño de vestuario: <span>Marta Murillo</span> / Diseño de sonido:
            <span>Pablo Martínez</span>
          </i>{" "}
          <i>
            Directora de producción: <span>Milena Suárez</span> / Ayudante de
            producción: <span>Paula Pina</span>
          </i>
          <i>
            Equipo S. Cervantina: <span>Ana Carrera, Jaime Saavedra</span> /
            Edición de visuales: <span>Ana Caro</span>
          </i>
          <i>
            Diseño gráfico: <span>Jesús Bosqued </span>/Interpretación:{" "}
            <span>Celia Freijeiro</span>
          </i>
          <i>Una producción de la Sociedad Cervantina</i>
          <i>con el apoyo de INAEM y Fundación La Caixa</i>
        </div>
      ),
    },
    colaDePez: {
      id,
      title: "Cola de Pez || Pablo Chaves",
      description:
        "Proyecto Cola de Pez de Pablo Chaves en Bastero Kulturgunea.",
      ficha: (
        <div className="container-ficha-centrada">
          <i className="name-ficha">Estrenada en Bastero Kulturgunea.</i>
          <div className="container-ficha-centrada">
            <i>
              Dirección: <span>Javier Lara</span> / Espacio escénico:{" "}
              <span>Pablo Chaves</span>
            </i>
            <i>
              Intérprete: <span>Egoitz Sánchez</span>
            </i>
            <i>
              Diseño de iluminación:<span>Lola Barroso </span> / Ayudante de
              iluminación: <span>Elena Alejandre</span>
            </i>{" "}
            <i>
              Diseño de vestuario: <span>Marta Murillo</span> / Diseño de
              sonido:
              <span>Pablo Martínez</span>
            </i>{" "}
            <i>
              Directora de producción: <span>Milena Suárez</span> / Ayudante de
              producción: <span>Paula Pina</span>
            </i>
            <i>
              Equipo S. Cervantina: <span>Ana Carrera, Jaime Saavedra</span> /
              Edición de visuales: <span>Ana Caro</span>
            </i>
            <i>
              Diseño gráfico: <span>Jesús Bosqued </span>/Interpretación:{" "}
              <span>Celia Freijeiro</span>
            </i>
            <i>Una producción de la Sociedad Cervantina</i>
            <i>con el apoyo de INAEM y Fundación La Caixa</i>
          </div>
        </div>
      ),
      fichaMobile: (
        <div className="container-ficha-centrada">
          <i className="name-ficha">Estrenada en Bastero Kulturgunea.</i>
          <div className="container-ficha-centrada">
            <i>
              Dirección: <span>Javier Lara</span> / Espacio escénico:{" "}
              <span>Pablo Chaves</span>
            </i>
            <i>
              Intérprete: <span>Egoitz Sánchez</span>
            </i>
            <i>
              Diseño de iluminación:<span>Lola Barroso </span> / Ayudante de
              iluminación: <span>Elena Alejandre</span>
            </i>{" "}
            <i>
              Diseño de vestuario: <span>Marta Murillo</span> / Diseño de
              sonido:
              <span>Pablo Martínez</span>
            </i>{" "}
            <i>
              Directora de producción: <span>Milena Suárez</span> / Ayudante de
              producción: <span>Paula Pina</span>
            </i>
            <i>
              Equipo S. Cervantina: <span>Ana Carrera, Jaime Saavedra</span> /
              Edición de visuales: <span>Ana Caro</span>
            </i>
            <i>
              Diseño gráfico: <span>Jesús Bosqued </span>/Interpretación:{" "}
              <span>Celia Freijeiro</span>
            </i>
            <i>Una producción de la Sociedad Cervantina</i>
            <i>con el apoyo de INAEM y Fundación La Caixa</i>
          </div>
        </div>
      ),
    },
    noEstoyDeFrente: {
      title: "No estoy de frente || Pablo Chaves",
      description: "Proyecto No estoy de frente escenografía de Pablo Chaves",
      ficha: (
        <div className="container-ficha-centrada">
          <i className="name-ficha">Estrenada en La Fundición de Sevilla.</i>
          <div className="container-ficha-centrada">
            <i>
              Dirección: <span>Chiqui Carabante y Paco León </span> /
              Escenografía: <span>Pablo Chaves</span>
            </i>
            <i>
              Autoría: <span>MariPaz Sayago y Chiqui Carabante</span>
            </i>
            <i>
              Intérprete: <span>MariPaz Sayago </span> / Música:{" "}
              <span>Depipio</span>
            </i>{" "}
            <i>
              Iluminación: <span>Irene Cantero</span> / Fotografía:
              <span>María Artiaga y Concha de la Rosa / </span>
            </i>{" "}
          </div>
        </div>
      ),
      fichaMobile: (
        <div className="container-ficha-centrada">
          <i className="name-ficha">Estrenada en La Fundición de Sevilla.</i>
          <div className="container-ficha-centrada">
            <i>
              Dirección: <span>Chiqui Carabante y Paco León </span> /
              Escenografía: <span>Pablo Chaves</span>
            </i>
            <i>
              Autoría: <span>MariPaz Sayago y Chiqui Carabante</span>
            </i>
            <i>
              Intérprete: <span>MariPaz Sayago </span> / Música:{" "}
              <span>Depipio</span>
            </i>{" "}
            <i>
              Iluminación: <span>Irene Cantero</span> / Fotografía:
              <span>María Artiaga y Concha de la Rosa / </span>
            </i>{" "}
          </div>
        </div>
      ),
    },
    laFortaleza: {
      title: "La Fortaleza || Pablo Chaves",
      description: "Proyecto La Fortaleza de Pablo Chaves",
      ficha: (
        <div className="container-ficha-centrada">
          <i>
            Texto y dirección: <span>Lucía Carballal</span>
          </i>
          <i>
            Escenografía y vestuario: <span>Pablo Chaves</span>
          </i>
          <i>
            Iluminación: <span>Pilar Valdelvira / </span>
          </i>
          <i>
            Diseño de sonido<span>Benigno Moreno </span> Vídeoescena:{" "}
            <span>Elvira Ruiz Zurita / </span>
          </i>{" "}
          <i>
            texto vídeoescena: <span>: Pablo Carballal</span> Ayudante de
            dirección
            <span>Aitana Sar</span>
          </i>{" "}
          <i>
            Agradecimientos:{" "}
            <span>
              Lola Luengo, Luis Sorolla, Marc Domingo Carulla, Fernando de
              Retes, Aurelia González Y Sergio Adillo
            </span>{" "}
          </i>
          <i>Producción: Compañía Nacional de Teatro Clásico </i>
        </div>
      ),
      fichaMobile: (
        <div className="container-ficha-centrada">
          <i>
            Texto y dirección: <span>Lucía Carballal</span> Escenografía y
            vestuario: <span>Pablo Chaves</span>
          </i>
          <i>
            Iluminación: <span>Pilar Valdelvira / </span>
          </i>
          <i>
            Diseño de sonido<span>Benigno Moreno </span> Vídeoescena:{" "}
            <span>Elvira Ruiz Zurita / </span>
          </i>{" "}
          <i>
            texto vídeoescena: <span>: Pablo Carballal</span> Ayudante de
            dirección
            <span>Aitana Sar</span>
          </i>{" "}
          <i>
            Agradecimientos:{" "}
            <span>
              Lola Luengo, Luis Sorolla, Marc Domingo Carulla, Fernando de
              Retes, Aurelia González Y Sergio Adillo
            </span>{" "}
          </i>
          <i>Producción: Compañía Nacional de Teatro Clásico </i>
        </div>
      ),
    },
    laDomesticacion: {
      title: "La Domesticación || Pablo Chaves",
      description: "Proyecto La Domesticación de Pablo Chaves",
      ficha: (
        <div className="container-ficha-centrada">
          <i>
            Dirección artística, coreografía, dramaturgia, espacio escénico:
            <span>: Luz Arcas</span> Espacio escénico:{" "}
            <span>: Luz Arcas y Pablo Chaves</span>
          </i>
          <i>
            Acompañamiento artístico y dramatúrgico{" "}
            <span>Victoria Aimé y Rafael SM Paniagua </span>
          </i>
          <i>
            Música: <span>Le Parody / </span> Iluminación:{" "}
            <span>Jorge Colomer / </span>Espacio sonoro:{" "}
            <span>Pablo Contreras</span>
          </i>{" "}
          <i>
            Texto: <span>:Luz Arcas y Abraham Gragera / </span> Vestuario:
            <span>
              Luz Arcas, Victoria Aime, Rafael SM Panigua Roberto Martínez
            </span>
          </i>{" "}
          <i>
            Foto y vídeo promocional: <span>Virginia Rota /</span> Diseño
            gráfico: <span>María Peinado</span>
          </i>
          <i>
            Dirección técnica: <span>Cristina L. Bolívar </span>{" "}
          </i>
          <i>
            Diseño y coordinación de producción:{" "}
            <span>Alex Foulkes y Alberto Núñez</span>
          </i>
          <i>
            Producción ejecutiva: <span>Fernando Jariego</span>{" "}
          </i>
        </div>
      ),
      fichaMobile: (
        <div className="container-ficha-centrada">
          <i>
            Dirección artística, coreografía, dramaturgia, espacio escénico:
            <span>: Luz Arcas</span> Espacio escénico:{" "}
            <span>: Luz Arcas y Pablo Chaves</span>
          </i>
          <i>
            Acompañamiento artístico y dramatúrgico{" "}
            <span>Victoria Aimé y Rafael SM Paniagua </span>
          </i>
          <i>
            Música: <span>Le Parody / </span> Iluminación:{" "}
            <span>Jorge Colomer / </span>Espacio sonoro:{" "}
            <span>Pablo Contreras</span>
          </i>{" "}
          <i>
            Texto: <span>:Luz Arcas y Abraham Gragera / </span> Vestuario:
            <span>
              Luz Arcas, Victoria Aime, Rafael SM Panigua Roberto Martínez
            </span>
          </i>{" "}
          <i>
            Foto y vídeo promocional: <span>Virginia Rota /</span> Diseño
            gráfico: <span>María Peinado</span>
          </i>
          <i>
            Dirección técnica: <span>Cristina L. Bolívar </span>{" "}
          </i>
          <i>
            Diseño y coordinación de producción:{" "}
            <span>Alex Foulkes y Alberto Núñez</span>
          </i>
          <i>
            Producción ejecutiva: <span>Fernando Jariego</span>{" "}
          </i>
        </div>
      ),
    },
    buenaobra: {
      title: "La Buena Obra || Pablo Chaves",
      description:
        "Proyecto Domesticación de Pablo Chaves estrenada en los Teatros del Canal",
      ficha: (
        <div className="container-ficha-centrada">
          <i className="name-ficha">Estrenada en los Teatros del Canal</i>
          <div className="container-ficha-centrada">
            <i>
              Dirección artística, coreografía, dramaturgia, espacio escénico:
              <span>Luz Arcas</span> Espacio escénico:{" "}
              <span>: Luz Arcas y Pablo Chaves</span>
            </i>
            <i>
              Acompañamiento artístico y dramatúrgico{" "}
              <span>Victoria Aimé y Rafael SM Paniagua </span>
            </i>
            <i>
              Música: <span>Le Parody / </span> Iluminación:{" "}
              <span>Jorge Colomer / </span>Espacio sonoro:{" "}
              <span>Pablo Contreras</span>
            </i>{" "}
            <i>
              Texto: <span>:Luz Arcas y Abraham Gragera / </span> Vestuario:
              <span>
                Luz Arcas, Victoria Aime, Rafael SM Panigua Roberto Martínez
              </span>
            </i>{" "}
            <i>
              Foto y vídeo promocional: <span>Virginia Rota /</span> Diseño
              gráfico: <span>María Peinado</span>
            </i>
            <i>
              Dirección técnica: <span>Cristina L. Bolívar </span>{" "}
            </i>
            <i>
              Diseño y coordinación de producción:{" "}
              <span>Alex Foulkes y Alberto Núñez</span>
            </i>
            <i>
              Producción ejecutiva: <span>Fernando Jariego</span>{" "}
            </i>
          </div>
        </div>
      ),
      fichaMobile: (
        <div className="container-ficha-centrada">
          <i className="name-ficha">Estrenada en los Teatros del Canal</i>
          <div className="container-ficha-centrada">
            <i>
              Dirección artística, coreografía, dramaturgia, espacio escénico:
              <span>Luz Arcas</span> Espacio escénico:{" "}
              <span>: Luz Arcas y Pablo Chaves</span>
            </i>
            <i>
              Acompañamiento artístico y dramatúrgico{" "}
              <span>Victoria Aimé y Rafael SM Paniagua </span>
            </i>
            <i>
              Música: <span>Le Parody / </span> Iluminación:{" "}
              <span>Jorge Colomer / </span>Espacio sonoro:{" "}
              <span>Pablo Contreras</span>
            </i>{" "}
            <i>
              Texto: <span>:Luz Arcas y Abraham Gragera / </span> Vestuario:
              <span>
                Luz Arcas, Victoria Aime, Rafael SM Panigua Roberto Martínez
              </span>
            </i>{" "}
            <i>
              Foto y vídeo promocional: <span>Virginia Rota /</span> Diseño
              gráfico: <span>María Peinado</span>
            </i>
            <i>
              Dirección técnica: <span>Cristina L. Bolívar </span>{" "}
            </i>
            <i>
              Diseño y coordinación de producción:{" "}
              <span>Alex Foulkes y Alberto Núñez</span>
            </i>
            <i>
              Producción ejecutiva: <span>Fernando Jariego</span>{" "}
            </i>
          </div>
        </div>
      ),
    },
    elbanquete: {
      ficha: "El Banquete || Pablo Chaves",
      description:
        "Proyecto El Banquete escenografía de Pablo Chaves estrenada en Exlímite y Nave 73",
      ficha: (
        <div className="container-ficha-centrada">
          <i className="name-ficha">Estrenada en Exlímite y Nave 73</i>
          <i>
            Dirección: <span>Adrián Pulido</span>
          </i>
          <i>
            Escenografía y vestuario <span>Pablo Chaves</span>
          </i>
          <i>
            Texto: <span>Tony Galán</span>
          </i>
          <i>
            Mundo sonoro: :
            <span>Adrián Pulido, Pablo Sánchez y Juan Sánchez </span>
          </i>{" "}
          <i>
            Dirección de movimiento: <span>Juando Martínez Montiel / </span>
            Diseño de Luces
            <span>Alvaro Guisado Garavito</span>
          </i>{" "}
          <i>
            Ayudantía de dirección: <span>: Iñaki Danta </span> /Fotografía y
            cartel: <span>Xose Roi Martínez</span>
          </i>
          <i>
            Comunicación y prensa: <span>de Amanda H C - Proyecto Duas</span>
          </i>
        </div>
      ),
      fichaMobile: (
        <div className="container-ficha-centrada">
          <i className="name-ficha">Estrenada en Exlímite y Nave 73</i>
          <i>
            Dirección: <span>Adrián Pulido</span>
          </i>
          <i>
            Escenografía y vestuario <span>Pablo Chaves</span>
          </i>
          <i>
            Texto: <span>Tony Galán</span>
          </i>
          <i>
            Mundo sonoro: :
            <span>Adrián Pulido, Pablo Sánchez y Juan Sánchez </span>
          </i>{" "}
          <i>
            Dirección de movimiento: <span>Juando Martínez Montiel / </span>
            Diseño de Luces
            <span>Alvaro Guisado Garavito</span>
          </i>{" "}
          <i>
            Ayudantía de dirección: <span>: Iñaki Danta </span> /Fotografía y
            cartel: <span>Xose Roi Martínez</span>
          </i>
          <i>
            Comunicación y prensa: <span>de Amanda H C - Proyecto Duas</span>
          </i>
        </div>
      ),
    },
    tablao: {
      ficha: "Tablao || Pablo Chaves",
      description: "Proyecto Tablao escenografía de Pablo Chaves",
      ficha: (
        <div className="container-ficha-centrada">
          <i className="name-ficha">Estrenada en Ca2m y Condeduque.</i>
          <div className="container-ficha-centrada">
            <i>
              Creado por <span>Ernesto Artillo </span> Arquitecto del proyecto{" "}
              <span>Pablo Chaves</span>/Asesoría científica{" "}
              <span>Alicia Navarro</span>
            </i>
            <i>
              Formación:- Guitarra <span>Yerai Cortés </span> - Cante{" "}
              <span>Niño de Elche </span>- Baile{" "}
              <span>Andrés Marín y Rocío Molina</span>
            </i>{" "}
            <i>
              Distribución y coordinación de producción{" "}
              <span>Cal Producciones</span> Ayudante de dirección
              <span>Aitana Sar</span>
            </i>{" "}
            <i>
              Coordinación técnica <span>Txisco Velasco /</span> Diseño
              iluminación <span>Antonio Valiente AAI</span>
            </i>
            <i>
              Sonido <span>Víctor Tomé / </span> Maquinaria{" "}
              <span>Jorge Limosnita </span> Asistencia en iluminación{" "}
              <span>Suh- Güein</span>
            </i>
            <i>
              Una producción <span>del Museo Ca2m</span>{" "}
            </i>
            <i>
              Con el apoyo de <span>Corral de La Morería</span>
            </i>
          </div>
        </div>
      ),
      fichaMobile: (
        <div className="container-ficha-centrada">
          <i className="name-ficha">Estrenada en Ca2m y Condeduque.</i>
          <div className="container-ficha-centrada">
            <i>
              Creado por <span>Ernesto Artillo </span> Arquitecto del proyecto{" "}
              <span>Pablo Chaves</span>/Asesoría científica{" "}
              <span>Alicia Navarro</span>
            </i>
            <i>
              Formación:- Guitarra <span>Yerai Cortés </span> - Cante{" "}
              <span>Niño de Elche </span>- Baile{" "}
              <span>Andrés Marín y Rocío Molina</span>
            </i>{" "}
            <i>
              Distribución y coordinación de producción{" "}
              <span>Cal Producciones</span> Ayudante de dirección
              <span>Aitana Sar</span>
            </i>{" "}
            <i>
              Coordinación técnica <span>Txisco Velasco /</span> Diseño
              iluminación <span>Antonio Valiente AAI</span>
            </i>
            <i>
              Sonido <span>Víctor Tomé / </span> Maquinaria{" "}
              <span>Jorge Limosnita </span> Asistencia en iluminación{" "}
              <span>Suh- Güein</span>
            </i>
            <i>
              Una producción <span>del Museo Ca2m</span>{" "}
            </i>
            <i>
              Con el apoyo de <span>Corral de La Morería</span>
            </i>
          </div>
        </div>
      ),
    },
    guerra: {
      ficha: "Somos la Guerra || Pablo Chaves",
      description: "Proyecto Somos la Guerra escenografía de Pablo Chaves",
      ficha: (
        <div className="container-ficha-centrada">
          <i className="name-ficha">Estrenada en los Teatros del Canal</i>
          <div className="container-ficha-centrada">
            <i>
              Dirección artística, coreografía, dramaturgia, espacio escénico:
              <span>Luz Arcas</span> Espacio escénico:{" "}
              <span>: Luz Arcas y Pablo Chaves</span>
            </i>
            <i>
              Acompañamiento artístico y dramatúrgico{" "}
              <span>Victoria Aimé y Rafael SM Paniagua </span>
            </i>
            <i>
              Música: <span>Le Parody / </span> Iluminación:{" "}
              <span>Jorge Colomer / </span>Espacio sonoro:{" "}
              <span>Pablo Contreras</span>
            </i>{" "}
            <i>
              Texto: <span>:Luz Arcas y Abraham Gragera / </span> Vestuario:
              <span>
                Luz Arcas, Victoria Aime, Rafael SM Panigua Roberto Martínez
              </span>
            </i>{" "}
            <i>
              Foto y vídeo promocional: <span>Virginia Rota /</span> Diseño
              gráfico: <span>María Peinado</span>
            </i>
            <i>
              Dirección técnica: <span>Cristina L. Bolívar </span>{" "}
            </i>
            <i>
              Diseño y coordinación de producción:{" "}
              <span>Alex Foulkes y Alberto Núñez</span>
            </i>
            <i>
              Producción ejecutiva: <span>Fernando Jariego</span>{" "}
            </i>
          </div>
        </div>
      ),
      fichaMobile: (
        <div className="container-ficha-centrada">
          <i className="name-ficha">Estrenada en los Teatros del Canal</i>
          <div className="container-ficha-centrada">
            <i>
              Dirección artística, coreografía, dramaturgia, espacio escénico:
              <span>Luz Arcas</span> Espacio escénico:{" "}
              <span>: Luz Arcas y Pablo Chaves</span>
            </i>
            <i>
              Acompañamiento artístico y dramatúrgico{" "}
              <span>Victoria Aimé y Rafael SM Paniagua </span>
            </i>
            <i>
              Música: <span>Le Parody / </span> Iluminación:{" "}
              <span>Jorge Colomer / </span>Espacio sonoro:{" "}
              <span>Pablo Contreras</span>
            </i>{" "}
            <i>
              Texto: <span>:Luz Arcas y Abraham Gragera / </span> Vestuario:
              <span>
                Luz Arcas, Victoria Aime, Rafael SM Panigua Roberto Martínez
              </span>
            </i>{" "}
            <i>
              Foto y vídeo promocional: <span>Virginia Rota /</span> Diseño
              gráfico: <span>María Peinado</span>
            </i>
            <i>
              Dirección técnica: <span>Cristina L. Bolívar </span>{" "}
            </i>
            <i>
              Diseño y coordinación de producción:{" "}
              <span>Alex Foulkes y Alberto Núñez</span>
            </i>
            <i>
              Producción ejecutiva: <span>Fernando Jariego</span>{" "}
            </i>
          </div>
        </div>
      ),
    },
    psicosis: {
      ficha: "Psicosis 4.48 || Pablo Chaves",
      description: "Proyecto Psicosis 4.48 escenografía de Pablo Chaves",
      ficha: (
        <div className="container-ficha-centrada">
          <i className="name-ficha">Estrenada en el Teatro Español</i>
          <div className="container-ficha-centrada">
            <i>
              Dirección: <span>Luz Arcas - La Phármaco</span> Con{" "}
              <span>Natalia Huarte</span>
            </i>
            <i>
              Diseño de escenografía: <span>Pablo Chaves</span>
            </i>
            <i>
              Diseño de escenografía: <span>Jorge Colomer / </span> Diseño de
              vestuario: <span>Luz Arcas / </span> Composición música original:{" "}
              <span>Adrián Foulkes</span>
            </i>
            <i>
              Diseño de espacio sonoro: <span>Pablo Contreras / </span>{" "}
              Asistencia artística:
              <span>Victoria Aime</span>
            </i>{" "}
            <i>
              Colaboración artística: <span>Sebastián Vogler </span>/ Mirada
              externa: <span>Teresa Casas</span>
            </i>
            <i>
              Ayudante de dirección: <span>Javier L. Patiño </span> / Residente
              de ayudantía de dirección<span>Cristina Hermida</span>
            </i>
            <i>Una coproducción del Teatro Español y La Phármaco</i>
          </div>
        </div>
      ),
      fichaMobile: (
        <div className="container-ficha-centrada">
          <i className="name-ficha">Estrenada en el Teatro Español</i>
          <div className="container-ficha-centrada">
            <i>
              Dirección: <span>Luz Arcas - La Phármaco</span> Con{" "}
              <span>Natalia Huarte</span>
            </i>
            <i>
              Diseño de escenografía: <span>Pablo Chaves</span>
            </i>
            <i>
              Diseño de escenografía: <span>Jorge Colomer / </span> Diseño de
              vestuario: <span>Luz Arcas / </span> Composición música original:{" "}
              <span>Adrián Foulkes</span>
            </i>
            <i>
              Diseño de espacio sonoro: <span>Pablo Contreras / </span>{" "}
              Asistencia artística:
              <span>Victoria Aime</span>
            </i>{" "}
            <i>
              Colaboración artística: <span>Sebastián Vogler </span>/ Mirada
              externa: <span>Teresa Casas</span>
            </i>
            <i>
              Ayudante de dirección: <span>Javier L. Patiño </span> / Residente
              de ayudantía de dirección<span>Cristina Hermida</span>
            </i>
            <i>Una coproducción del Teatro Español y La Phármaco</i>
          </div>
        </div>
      ),
    },
    losNuestros: {
      ficha: "Los Nuestros || Pablo Chaves",
      description: "Proyecto Los Nuestros escenografía de Pablo Chaves",
      ficha: (
        <div className="container-ficha-centrada">
          <i className="name-ficha">
            Estrenada en el Teatro Valle Inclán, en el Centro Dramático Nacional
            y Teatre Nacional de Catalunya.
          </i>
          <div className="container-ficha-centrada">
            <i>
              Texto y dirección: <span>Lucía Carballal</span>
            </i>
            <i>
              Diseño de escenografía: <span>Pablo Chaves Maza</span>
            </i>
            <i>
              Diseño de iluminación: <span>Pilar Valdelvira AAI</span> / Diseño
              de vestuario: <span>Sandra Espinosa</span>
            </i>
            <i>
              Composición musical y coach vocal: <span>Irene Novoa</span> /
              Diseño de sonido: <span>Benigno Moreno</span>
            </i>
            <i>
              Coreografía y asesoría de movimiento:{" "}
              <span>Belén Martí Lluch</span> / Asesoría sefardí:{" "}
              <span>Eva Chocrón</span>
            </i>
            <i>
              Ayudante de dirección: <span>Javier L. Patiño</span> / Ayudante de
              escenografía: <span>Amalia Elorza Izaguirre</span>
            </i>
            <i>
              Ayudante de iluminación: <span>Marina Cabrero</span> / Ayudante de
              vestuario: <span>Igone Teso AAPEE</span>
            </i>
            <i>
              Tráiler y fotografía: <span>Bárbara Sánchez Palomero</span>
            </i>
            <i>
              Realización de escenografía:{" "}
              <span>May Servicios, Ricardo Vergne, Scnik Movil y Fermisa</span>
            </i>
            <i>
              Producción: <span>Centro Dramático Nacional</span> y{" "}
              <span>Teatre Nacional de Catalunya</span>
            </i>
          </div>
        </div>
      ),
      fichaMobile: (
        <div className="container-ficha-centrada">
          <i className="name-ficha">
            Estrenada en el Teatro Valle Inclán, en el Centro Dramático Nacional
            y Teatre Nacional de Catalunya.
          </i>
          <div className="container-ficha-centrada">
            <i>
              Texto y dirección: <span>Lucía Carballal</span>
            </i>
            <i>
              Diseño de escenografía: <span>Pablo Chaves Maza</span>
            </i>
            <i>
              Diseño de iluminación: <span>Pilar Valdelvira AAI</span> / Diseño
              de vestuario: <span>Sandra Espinosa</span>
            </i>
            <i>
              Composición musical y coach vocal: <span>Irene Novoa</span> /
              Diseño de sonido: <span>Benigno Moreno</span>
            </i>
            <i>
              Coreografía y asesoría de movimiento:{" "}
              <span>Belén Martí Lluch</span> / Asesoría sefardí:{" "}
              <span>Eva Chocrón</span>
            </i>
            <i>
              Ayudante de dirección: <span>Javier L. Patiño</span> / Ayudante de
              escenografía: <span>Amalia Elorza Izaguirre</span>
            </i>
            <i>
              Ayudante de iluminación: <span>Marina Cabrero</span> / Ayudante de
              vestuario: <span>Igone Teso AAPEE</span>
            </i>
            <i>
              Tráiler y fotografía: <span>Bárbara Sánchez Palomero</span>
            </i>
            <i>
              Realización de escenografía:{" "}
              <span>May Servicios, Ricardo Vergne, Scnik Movil y Fermisa</span>
            </i>
            <i>
              Producción: <span>Centro Dramático Nacional</span> y{" "}
              <span>Teatre Nacional de Catalunya</span>
            </i>
          </div>
        </div>
      ),
    },
    lasApariciones: {
      ficha: "Las Apariciones || Pablo Chaves",
      description: "Proyecto Las Apariciones escenografía de Pablo Chaves",
      ficha: (
        <div className="container-ficha-centrada">
          <i className="name-ficha">
            Estrenada en el Centro Dramático Nacional, en la sala Princesa.
          </i>
          <div className="container-ficha-centrada">
            <i>
              Dirección: <span>Juan Ceacero</span> / Dramaturgia:{" "}
              <span>Fernando Delgado-Hierro</span>
            </i>
            <i>
              Escenografía: <span>Pablo Chaves</span> / Iluminación:{" "}
              <span>Rodrigo Ortega</span> / Vestuario:{" "}
              <span>Paola de Diego</span>
            </i>
            <i>
              Diseño sonoro: <span>Daniel Jumillas</span> / Ayudante de
              dirección: <span>María Martínez</span>
            </i>
            <i>
              Reparto: <span>Pablo Chaves</span> y{" "}
              <span>Fernando Delgado-Hierro</span>
            </i>
            <i>
              Producción: <span>Centro Dramático Nacional</span> y{" "}
              <span>Compañía Exlímite</span>
            </i>
          </div>
        </div>
      ),
      fichaMobile: (
        <div className="container-ficha-centrada">
          <i className="name-ficha">
            Estrenada en el Centro Dramático Nacional, en la sala Princesa.
          </i>
          <div className="container-ficha-centrada">
            <i>
              Dirección: <span>Juan Ceacero</span> / Dramaturgia:{" "}
              <span>Fernando Delgado-Hierro</span>
            </i>
            <i>
              Escenografía: <span>Pablo Chaves</span> / Iluminación:{" "}
              <span>Rodrigo Ortega</span> / Vestuario:{" "}
              <span>Paola de Diego</span>
            </i>
            <i>
              Diseño sonoro: <span>Daniel Jumillas</span> / Ayudante de
              dirección: <span>María Martínez</span>
            </i>
            <i>
              Reparto: <span>Pablo Chaves</span> y{" "}
              <span>Fernando Delgado-Hierro</span>
            </i>
            <i>
              Producción: <span>Centro Dramático Nacional</span> y{" "}
              <span>Compañía Exlímite</span>
            </i>
          </div>
        </div>
      ),
    },
    pequenoCumuloDeCircunstancias: {
      ficha: "Pequeño Cúmulo de Circunstancias || Pablo Chaves",
      description:
        "Proyecto Pequeño Cúmulo de Circunstancias  escenografía de Pablo Chaves",
      ficha: (
        <div className="container-ficha-centrada">
          <i className="name-ficha">
            Estrenada en el Centro Dramático Nacional, en la sala Princesa.
          </i>
          <div className="container-ficha-centrada">
            <i>
              Dirección: <span>Cris Blanco</span> / Dramaturgia:{" "}
              <span>Rocío Bello</span>, <span>Cris Blanco</span>,{" "}
              <span>Óscar Bueno</span>, <span>Anto Rodríguez</span>
            </i>
            <i>
              Escenografía: <span>Pablo Chaves</span> / Iluminación:{" "}
              <span>Miguel Ruz Velasco</span> / Vestuario:{" "}
              <span>Jorge Dutor</span>
            </i>
            <i>
              Diseño sonoro: <span>Carlos Parra</span> / Ayudante de dirección:{" "}
              <span>Marta Orozco</span> / Ayudante de escenografía:{" "}
              <span>Lia González Álvarez</span>
            </i>
            <i>
              Reparto: <span>Oihana Altube</span>, <span>Rocío Bello</span>,{" "}
              <span>Cris Blanco</span> e <span>Íñigo Rodríguez-Claro</span>
            </i>
            <i>
              Fotografía: <span>Geraldine Leloutre</span>
            </i>
            <i>
              Producción: <span>Centro Dramático Nacional</span>,{" "}
              <span>Cris Blanco</span> y <span>Festival Grec de Barcelona</span>
            </i>
          </div>
        </div>
      ),
      fichaMobile: (
        <div className="container-ficha-centrada">
          <i className="name-ficha">
            Estrenada en el Centro Dramático Nacional, en la sala Princesa.
          </i>
          <div className="container-ficha-centrada">
            <i>
              Dirección: <span>Cris Blanco</span> / Dramaturgia:{" "}
              <span>Rocío Bello</span>, <span>Cris Blanco</span>,{" "}
              <span>Óscar Bueno</span>, <span>Anto Rodríguez</span>
            </i>
            <i>
              Escenografía: <span>Pablo Chaves</span> / Iluminación:{" "}
              <span>Miguel Ruz Velasco</span> / Vestuario:{" "}
              <span>Jorge Dutor</span>
            </i>
            <i>
              Diseño sonoro: <span>Carlos Parra</span> / Ayudante de dirección:{" "}
              <span>Marta Orozco</span> / Ayudante de escenografía:{" "}
              <span>Lia González Álvarez</span>
            </i>
            <i>
              Reparto: <span>Oihana Altube</span>, <span>Rocío Bello</span>,{" "}
              <span>Cris Blanco</span> e <span>Íñigo Rodríguez-Claro</span>
            </i>
            <i>
              Fotografía: <span>Geraldine Leloutre</span>
            </i>
            <i>
              Producción: <span>Centro Dramático Nacional</span>,{" "}
              <span>Cris Blanco</span> y <span>Festival Grec de Barcelona</span>
            </i>
          </div>
        </div>
      ),
    },
    matrimonioBlanco: {
      ficha: "Matrimonio Blanco || Pablo Chaves",
      description: "Proyecto Matrimonio Blanco  escenografía de Pablo Chaves",
      ficha: (
        <div className="container-ficha-centrada">
          <i className="name-ficha">Estrenada en Réplika</i>
          <div className="container-ficha-centrada">
            <i>
              Texto original: <span>Tadeusz Rozewicz</span> / Versión:{" "}
              <span>Iciar Ventepan</span> y <span>Flavia Forni</span>
            </i>
            <i>
              Dirección: <span>Flavia Forni</span>, <span>Iciar Ventepan</span>{" "}
              y <span>Jaime Cano</span> / Ayudante de dirección:{" "}
              <span>Ander Alvarado</span>
            </i>
            <i>
              Escenografía: <span>Pablo Chaves</span>
            </i>
            <i>
              Vestuario: <span>Teresa Julián</span> / Diseño de iluminación:{" "}
              <span>George Marinov</span>
            </i>
            <i>
              Imagen de cartel: <span>Isabel Méndez</span> / Diseño de cartel:{" "}
              <span>Jaime Cano</span>
            </i>
            <i>
              Producción: <span>Cía. La Peatonal</span> con la ayuda del{" "}
              <span>Instituto Polaco de Cultura</span>
            </i>
          </div>
        </div>
      ),
      fichaMobile: (
        <div className="container-ficha-centrada">
          <i className="name-ficha">Estrenada en Réplika</i>
          <div className="container-ficha-centrada">
            <i>
              Texto original: <span>Tadeusz Rozewicz</span> / Versión:{" "}
              <span>Iciar Ventepan</span> y <span>Flavia Forni</span>
            </i>
            <i>
              Dirección: <span>Flavia Forni</span>, <span>Iciar Ventepan</span>{" "}
              y <span>Jaime Cano</span> / Ayudante de dirección:{" "}
              <span>Ander Alvarado</span>
            </i>
            <i>
              Escenografía: <span>Pablo Chaves</span>
            </i>
            <i>
              Vestuario: <span>Teresa Julián</span> / Diseño de iluminación:{" "}
              <span>George Marinov</span>
            </i>
            <i>
              Imagen de cartel: <span>Isabel Méndez</span> / Diseño de cartel:{" "}
              <span>Jaime Cano</span>
            </i>
            <i>
              Producción: <span>Cía. La Peatonal</span> con la ayuda del{" "}
              <span>Instituto Polaco de Cultura</span>
            </i>
          </div>
        </div>
      ),
    },

    default: {
      title: "Obra || Pablo Chaves",
      description:
        "Proyecto Cola de Pez de Pablo Chaves en Bastero Kulturgunea.",
    },
  };

  const data = obras[id] || obras.default;

  return {
    id,
    title: data.title,
    description: data.description,
    ficha: data.ficha,
    fichaMobile: data.fichaMobile,
  };
}
