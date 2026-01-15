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
          <p className="name-ficha">
            Estrenada en Teatro Español y Quique San Francisco
          </p>
          <p>
            Dramaturgia y dirección: <span>Javier Ballesteros</span>
          </p>
          <p>
            Escenografía y vestuario: <span>Pablo Chaves</span>
          </p>
          <p>
            Reparto:
            <span>
              Laura Barceló, Pablo Chaves, Eva Chocrón, Virginia de la Cruz,
              Matilde Gimeno, María Jáimez y June Velayos
            </span>
          </p>
          <p>
            Ayte. dirección: <span>Víctor Nacarino</span>
          </p>
          <p>
            Música: <span>Isabel Arranz</span>
          </p>
          <p>
            Coor. producción: <span>Raúl de la Torre</span>
          </p>
          <p>
            Ayudante de producción: <span>Juan Seade</span>
          </p>
          <p>
            Cartelería: <span>Alejandra Sánchez-Mateos</span>
          </p>
          <p>
            Producción: <span>Mujer en obras</span>
          </p>
        </div>
      ),
      fichaMobile: (
        <div className="container-ficha-centrada">
          <p className="name-ficha">
            Estrenada en Teatro Español y Quique San Francisco
          </p>
          <p>
            Dramaturgia y dirección: <span>Javier Ballesteros </span>
          </p>
          <p>
            Escenografía y vestuario: <span>Pablo Chaves</span>
          </p>
          <p>
            Reparto:
            <span>
              Laura Barceló, Pablo Chaves, Eva Chocrón, Virginia de la Cruz,
              Matilde Gimeno, María Jáimez y June Velayos{" "}
            </span>{" "}
          </p>{" "}
          <p>
            Ayte. dirección <span>Víctor Nacarino </span> /Música:
            <span>Isabel Arranz </span>
          </p>{" "}
          <p>
            Coor. producción: <span>Raúl de la Torre</span> / Ayudante de
            producción: <span>Juan Seade </span>
          </p>
          <p>
            Cartelería: <span>Alejandra Sánchez-Mateos</span>
          </p>
          <p>
            Producción: <span>Mujer en obras</span>
          </p>
        </div>
      ),
    },
    gaviotas: {
      title: "Gaviotas || Pablo Chaves",
      description:
        "Obra 'Gaviotas' de Pablo Chaves, explorando la libertad y el mar.",
      ficha: (
        <div className="container-ficha-centrada">
          <p className="name-ficha">
            {" "}
            <p className="name-ficha">Estrenada en Exlímite y Nave 73</p>
          </p>
          <p>
            Dirección: <span>Amanda Recacha y Rodolfo Sacristán / </span> /
            Escenografía y vestuario: <span>Pablo Chaves Maza</span>
          </p>
          <p>
            Autoría: <span>Adaptación libre por Gritadero Teatro / </span>
            Producción:<span>Gritadero Teatro </span>
          </p>
          <p>
            Iluminación: <span>Antonio Colomo Gragera</span>
          </p>{" "}
          <p>
            Diseño de cartel: <span>Emiliano Cano / </span> Fotografía
            <span>Luz Soria</span>
          </p>{" "}
          <p>
            Prensa: <span>María Díaz</span>
          </p>{" "}
        </div>
      ),
      fichaMobile: (
        <div className="container-ficha-centrada">
          <p className="name-ficha">
            {" "}
            <p className="name-ficha">Estrenada en Exlímite y Nave 73</p>
          </p>
          <p>
            Dirección: <span>Amanda Recacha y Rodolfo Sacristán / </span> /
            Escenografía y vestuario: <span>Pablo Chaves Maza</span>
          </p>
          <p>
            Autoría: <span>Adaptación libre por Gritadero Teatro / </span>
            Producción:<span>Gritadero Teatro </span>
          </p>
          <p>
            Iluminación: <span>Antonio Colomo Gragera</span>
          </p>{" "}
          <p>
            Diseño de cartel: <span>Emiliano Cano / </span> Fotografía
            <span>Luz Soria</span>
          </p>{" "}
          <p>
            Prensa: <span>María Díaz</span>
          </p>{" "}
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
          <p className="name-ficha">Estrenada en la Sala Cervantina.</p>
          <p>
            Dirección: <span>Leticia Dolera / </span> Dramaturgia:{" "}
            <span>María Folguera</span>
          </p>
          <p>
            Diseño espacio escénico <span>Pablo Chaves</span>
          </p>
          <p>
            Diseño de iluminación:<span>Lola Barroso </span> / Ayudante de
            iluminación: <span>Elena Alejandre</span>
          </p>{" "}
          <p>
            Diseño de vestuario: <span>Marta Murillo</span> / Diseño de sonido:
            <span>Pablo Martínez</span>
          </p>{" "}
          <p>
            Directora de producción: <span>Milena Suárez</span> / Ayudante de
            producción: <span>Paula Pina</span>
          </p>
          <p>
            Equipo S. Cervantina: <span>Ana Carrera, Jaime Saavedra</span> /
            Edición de visuales: <span>Ana Caro</span>
          </p>
          <p>
            Diseño gráfico: <span>Jesús Bosqued </span>/Interpretación:{" "}
            <span>Celia Freijeiro</span>
          </p>
          <p>Una producción de la Sociedad Cervantina</p>
          <p>con el apoyo de INAEM y Fundación La Caixa</p>
        </div>
      ),

      fichaMobile: (
        <div className="container-ficha-centrada">
          <p className="name-ficha">Estrenada en la Sala Cervantina.</p>
          <p>
            Dirección: <span>Leticia Dolera / </span> Dramaturgia:{" "}
            <span>María Folguera</span>/ Diseño espacio escénico{" "}
            <span>Pablo Chaves</span>
          </p>
          <p>
            Diseño de iluminación:<span>Lola Barroso </span> / Ayudante de
            iluminación: <span>Elena Alejandre</span>
          </p>{" "}
          <p>
            Diseño de vestuario: <span>Marta Murillo</span> / Diseño de sonido:
            <span>Pablo Martínez</span>
          </p>{" "}
          <p>
            Directora de producción: <span>Milena Suárez</span> / Ayudante de
            producción: <span>Paula Pina</span>
          </p>
          <p>
            Equipo S. Cervantina: <span>Ana Carrera, Jaime Saavedra</span> /
            Edición de visuales: <span>Ana Caro</span>
          </p>
          <p>
            Diseño gráfico: <span>Jesús Bosqued </span>/Interpretación:{" "}
            <span>Celia Freijeiro</span>
          </p>
          <p>Una producción de la Sociedad Cervantina</p>
          <p>con el apoyo de INAEM y Fundación La Caixa</p>
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
          <p className="name-ficha">Estrenada en Bastero Kulturgunea.</p>
          <div className="container-ficha-centrada">
            <p>
              Dirección: <span>Javier Lara</span> / Espacio escénico:{" "}
              <span>Pablo Chaves</span>
            </p>
            <p>
              Intérprete: <span>Egoitz Sánchez</span>
            </p>
            <p>
              Diseño de iluminación:<span>Lola Barroso </span> / Ayudante de
              iluminación: <span>Elena Alejandre</span>
            </p>{" "}
            <p>
              Diseño de vestuario: <span>Marta Murillo</span> / Diseño de
              sonido:
              <span>Pablo Martínez</span>
            </p>{" "}
            <p>
              Directora de producción: <span>Milena Suárez</span> / Ayudante de
              producción: <span>Paula Pina</span>
            </p>
            <p>
              Equipo S. Cervantina: <span>Ana Carrera, Jaime Saavedra</span> /
              Edición de visuales: <span>Ana Caro</span>
            </p>
            <p>
              Diseño gráfico: <span>Jesús Bosqued </span>/Interpretación:{" "}
              <span>Celia Freijeiro</span>
            </p>
            <p>Una producción de la Sociedad Cervantina</p>
            <p>con el apoyo de INAEM y Fundación La Caixa</p>
          </div>
        </div>
      ),
      fichaMobile: (
        <div className="container-ficha-centrada">
          <p className="name-ficha">Estrenada en Bastero Kulturgunea.</p>
          <div className="container-ficha-centrada">
            <p>
              Dirección: <span>Javier Lara</span> / Espacio escénico:{" "}
              <span>Pablo Chaves</span>
            </p>
            <p>
              Intérprete: <span>Egoitz Sánchez</span>
            </p>
            <p>
              Diseño de iluminación:<span>Lola Barroso </span> / Ayudante de
              iluminación: <span>Elena Alejandre</span>
            </p>{" "}
            <p>
              Diseño de vestuario: <span>Marta Murillo</span> / Diseño de
              sonido:
              <span>Pablo Martínez</span>
            </p>{" "}
            <p>
              Directora de producción: <span>Milena Suárez</span> / Ayudante de
              producción: <span>Paula Pina</span>
            </p>
            <p>
              Equipo S. Cervantina: <span>Ana Carrera, Jaime Saavedra</span> /
              Edición de visuales: <span>Ana Caro</span>
            </p>
            <p>
              Diseño gráfico: <span>Jesús Bosqued </span>/Interpretación:{" "}
              <span>Celia Freijeiro</span>
            </p>
            <p>Una producción de la Sociedad Cervantina</p>
            <p>con el apoyo de INAEM y Fundación La Caixa</p>
          </div>
        </div>
      ),
    },
    noEstoyDeFrente: {
      title: "No estoy de frente || Pablo Chaves",
      description: "Proyecto No estoy de frente escenografía de Pablo Chaves",
      ficha: (
        <div className="container-ficha-centrada">
          <p className="name-ficha">Estrenada en La Fundición de Sevilla.</p>
          <div className="container-ficha-centrada">
            <p>
              Dirección: <span>Chiqui Carabante y Paco León </span> /
              Escenografía: <span>Pablo Chaves</span>
            </p>
            <p>
              Autoría: <span>MariPaz Sayago y Chiqui Carabante</span>
            </p>
            <p>
              Intérprete: <span>MariPaz Sayago </span> / Música:{" "}
              <span>Depipio</span>
            </p>{" "}
            <p>
              Iluminación: <span>Irene Cantero</span> / Fotografía:
              <span>María Artiaga y Concha de la Rosa / </span>
            </p>{" "}
          </div>
        </div>
      ),
      fichaMobile: (
        <div className="container-ficha-centrada">
          <p className="name-ficha">Estrenada en La Fundición de Sevilla.</p>
          <div className="container-ficha-centrada">
            <p>
              Dirección: <span>Chiqui Carabante y Paco León </span> /
              Escenografía: <span>Pablo Chaves</span>
            </p>
            <p>
              Autoría: <span>MariPaz Sayago y Chiqui Carabante</span>
            </p>
            <p>
              Intérprete: <span>MariPaz Sayago </span> / Música:{" "}
              <span>Depipio</span>
            </p>{" "}
            <p>
              Iluminación: <span>Irene Cantero</span> / Fotografía:
              <span>María Artiaga y Concha de la Rosa / </span>
            </p>{" "}
          </div>
        </div>
      ),
    },
    laFortaleza: {
      title: "La Fortaleza || Pablo Chaves",
      description: "Proyecto La Fortaleza de Pablo Chaves",
      ficha: (
        <div className="container-ficha-centrada">
          <p>
            Texto y dirección: <span>Lucía Carballal</span>
          </p>
          <p>
            Escenografía y vestuario: <span>Pablo Chaves</span>
          </p>
          <p>
            Iluminación: <span>Pilar Valdelvira / </span>
          </p>
          <p>
            Diseño de sonido<span>Benigno Moreno </span> Vídeoescena:{" "}
            <span>Elvira Ruiz Zurita / </span>
          </p>{" "}
          <p>
            texto vídeoescena: <span>: Pablo Carballal</span> Ayudante de
            dirección
            <span>Aitana Sar</span>
          </p>{" "}
          <p>
            Agradecimientos:{" "}
            <span>
              Lola Luengo, Luis Sorolla, Marc Domingo Carulla, Fernando de
              Retes, Aurelia González Y Sergio Adillo
            </span>{" "}
          </p>
          <p>Producción: Compañía Nacional de Teatro Clásico </p>
        </div>
      ),
      fichaMobile: (
        <div className="container-ficha-centrada">
          <p>
            Texto y dirección: <span>Lucía Carballal</span> Escenografía y
            vestuario: <span>Pablo Chaves</span>
          </p>
          <p>
            Iluminación: <span>Pilar Valdelvira / </span>
          </p>
          <p>
            Diseño de sonido<span>Benigno Moreno </span> Vídeoescena:{" "}
            <span>Elvira Ruiz Zurita / </span>
          </p>{" "}
          <p>
            texto vídeoescena: <span>: Pablo Carballal</span> Ayudante de
            dirección
            <span>Aitana Sar</span>
          </p>{" "}
          <p>
            Agradecimientos:{" "}
            <span>
              Lola Luengo, Luis Sorolla, Marc Domingo Carulla, Fernando de
              Retes, Aurelia González Y Sergio Adillo
            </span>{" "}
          </p>
          <p>Producción: Compañía Nacional de Teatro Clásico </p>
        </div>
      ),
    },
    laDomesticacion: {
      title: "La Domesticación || Pablo Chaves",
      description: "Proyecto La Domesticación de Pablo Chaves",
      ficha: (
        <div className="container-ficha-centrada">
          <p>
            Dirección artística, coreografía, dramaturgia, espacio escénico:
            <span>: Luz Arcas</span> Espacio escénico:{" "}
            <span>: Luz Arcas y Pablo Chaves</span>
          </p>
          <p>
            Acompañamiento artístico y dramatúrgico{" "}
            <span>Victoria Aimé y Rafael SM Paniagua </span>
          </p>
          <p>
            Música: <span>Le Parody / </span> Iluminación:{" "}
            <span>Jorge Colomer / </span>Espacio sonoro:{" "}
            <span>Pablo Contreras</span>
          </p>{" "}
          <p>
            Texto: <span>:Luz Arcas y Abraham Gragera / </span> Vestuario:
            <span>
              Luz Arcas, Victoria Aime, Rafael SM Panigua Roberto Martínez
            </span>
          </p>{" "}
          <p>
            Foto y vídeo promocional: <span>Virginia Rota /</span> Diseño
            gráfico: <span>María Peinado</span>
          </p>
          <p>
            Dirección técnica: <span>Cristina L. Bolívar </span>{" "}
          </p>
          <p>
            Diseño y coordinación de producción:{" "}
            <span>Alex Foulkes y Alberto Núñez</span>
          </p>
          <p>
            Producción ejecutiva: <span>Fernando Jariego</span>{" "}
          </p>
        </div>
      ),
      fichaMobile: (
        <div className="container-ficha-centrada">
          <p>
            Dirección artística, coreografía, dramaturgia, espacio escénico:
            <span>: Luz Arcas</span> Espacio escénico:{" "}
            <span>: Luz Arcas y Pablo Chaves</span>
          </p>
          <p>
            Acompañamiento artístico y dramatúrgico{" "}
            <span>Victoria Aimé y Rafael SM Paniagua </span>
          </p>
          <p>
            Música: <span>Le Parody / </span> Iluminación:{" "}
            <span>Jorge Colomer / </span>Espacio sonoro:{" "}
            <span>Pablo Contreras</span>
          </p>{" "}
          <p>
            Texto: <span>:Luz Arcas y Abraham Gragera / </span> Vestuario:
            <span>
              Luz Arcas, Victoria Aime, Rafael SM Panigua Roberto Martínez
            </span>
          </p>{" "}
          <p>
            Foto y vídeo promocional: <span>Virginia Rota /</span> Diseño
            gráfico: <span>María Peinado</span>
          </p>
          <p>
            Dirección técnica: <span>Cristina L. Bolívar </span>{" "}
          </p>
          <p>
            Diseño y coordinación de producción:{" "}
            <span>Alex Foulkes y Alberto Núñez</span>
          </p>
          <p>
            Producción ejecutiva: <span>Fernando Jariego</span>{" "}
          </p>
        </div>
      ),
    },
    buenaobra: {
      title: "La Buena Obra || Pablo Chaves",
      description:
        "Proyecto Domesticación de Pablo Chaves estrenada en los Teatros del Canal",
      ficha: (
        <div className="container-ficha-centrada">
          <p className="name-ficha">Estrenada en los Teatros del Canal</p>
          <div className="container-ficha-centrada">
            <p>
              Dirección artística, coreografía, dramaturgia, espacio escénico:
              <span>Luz Arcas</span> Espacio escénico:{" "}
              <span>: Luz Arcas y Pablo Chaves</span>
            </p>
            <p>
              Acompañamiento artístico y dramatúrgico{" "}
              <span>Victoria Aimé y Rafael SM Paniagua </span>
            </p>
            <p>
              Música: <span>Le Parody / </span> Iluminación:{" "}
              <span>Jorge Colomer / </span>Espacio sonoro:{" "}
              <span>Pablo Contreras</span>
            </p>{" "}
            <p>
              Texto: <span>:Luz Arcas y Abraham Gragera / </span> Vestuario:
              <span>
                Luz Arcas, Victoria Aime, Rafael SM Panigua Roberto Martínez
              </span>
            </p>{" "}
            <p>
              Foto y vídeo promocional: <span>Virginia Rota /</span> Diseño
              gráfico: <span>María Peinado</span>
            </p>
            <p>
              Dirección técnica: <span>Cristina L. Bolívar </span>{" "}
            </p>
            <p>
              Diseño y coordinación de producción:{" "}
              <span>Alex Foulkes y Alberto Núñez</span>
            </p>
            <p>
              Producción ejecutiva: <span>Fernando Jariego</span>{" "}
            </p>
          </div>
        </div>
      ),
      fichaMobile: (
        <div className="container-ficha-centrada">
          <p className="name-ficha">Estrenada en los Teatros del Canal</p>
          <div className="container-ficha-centrada">
            <p>
              Dirección artística, coreografía, dramaturgia, espacio escénico:
              <span>Luz Arcas</span> Espacio escénico:{" "}
              <span>: Luz Arcas y Pablo Chaves</span>
            </p>
            <p>
              Acompañamiento artístico y dramatúrgico{" "}
              <span>Victoria Aimé y Rafael SM Paniagua </span>
            </p>
            <p>
              Música: <span>Le Parody / </span> Iluminación:{" "}
              <span>Jorge Colomer / </span>Espacio sonoro:{" "}
              <span>Pablo Contreras</span>
            </p>{" "}
            <p>
              Texto: <span>:Luz Arcas y Abraham Gragera / </span> Vestuario:
              <span>
                Luz Arcas, Victoria Aime, Rafael SM Panigua Roberto Martínez
              </span>
            </p>{" "}
            <p>
              Foto y vídeo promocional: <span>Virginia Rota /</span> Diseño
              gráfico: <span>María Peinado</span>
            </p>
            <p>
              Dirección técnica: <span>Cristina L. Bolívar </span>{" "}
            </p>
            <p>
              Diseño y coordinación de producción:{" "}
              <span>Alex Foulkes y Alberto Núñez</span>
            </p>
            <p>
              Producción ejecutiva: <span>Fernando Jariego</span>{" "}
            </p>
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
          <p className="name-ficha">Estrenada en Exlímite y Nave 73</p>
          <p>
            Dirección: <span>Adrián Pulido</span>
          </p>
          <p>
            Escenografía y vestuario <span>Pablo Chaves</span>
          </p>
          <p>
            Texto: <span>Tony Galán</span>
          </p>
          <p>
            Mundo sonoro: :
            <span>Adrián Pulido, Pablo Sánchez y Juan Sánchez </span>
          </p>{" "}
          <p>
            Dirección de movimiento: <span>Juando Martínez Montiel / </span>
            Diseño de Luces
            <span>Alvaro Guisado Garavito</span>
          </p>{" "}
          <p>
            Ayudantía de dirección: <span>: Iñaki Danta </span> /Fotografía y
            cartel: <span>Xose Roi Martínez</span>
          </p>
          <p>
            Comunicación y prensa: <span>de Amanda H C - Proyecto Duas</span>
          </p>
        </div>
      ),
      fichaMobile: (
        <div className="container-ficha-centrada">
          <p className="name-ficha">Estrenada en Exlímite y Nave 73</p>
          <p>
            Dirección: <span>Adrián Pulido</span>
          </p>
          <p>
            Escenografía y vestuario <span>Pablo Chaves</span>
          </p>
          <p>
            Texto: <span>Tony Galán</span>
          </p>
          <p>
            Mundo sonoro: :
            <span>Adrián Pulido, Pablo Sánchez y Juan Sánchez </span>
          </p>{" "}
          <p>
            Dirección de movimiento: <span>Juando Martínez Montiel / </span>
            Diseño de Luces
            <span>Alvaro Guisado Garavito</span>
          </p>{" "}
          <p>
            Ayudantía de dirección: <span>: Iñaki Danta </span> /Fotografía y
            cartel: <span>Xose Roi Martínez</span>
          </p>
          <p>
            Comunicación y prensa: <span>de Amanda H C - Proyecto Duas</span>
          </p>
        </div>
      ),
    },
    tablao: {
      ficha: "Tablao || Pablo Chaves",
      description: "Proyecto Tablao escenografía de Pablo Chaves",
      ficha: (
        <div className="container-ficha-centrada">
          <p className="name-ficha">Estrenada en Ca2m y Condeduque.</p>
          <div className="container-ficha-centrada">
            <p>
              Creado por <span>Ernesto Artillo </span> Arquitecto del proyecto{" "}
              <span>Pablo Chaves</span>/Asesoría científica{" "}
              <span>Alicia Navarro</span>
            </p>
            <p>
              Formación:- Guitarra <span>Yerai Cortés </span> - Cante{" "}
              <span>Niño de Elche </span>- Baile{" "}
              <span>Andrés Marín y Rocío Molina</span>
            </p>{" "}
            <p>
              Distribución y coordinación de producción{" "}
              <span>Cal Producciones</span> Ayudante de dirección
              <span>Aitana Sar</span>
            </p>{" "}
            <p>
              Coordinación técnica <span>Txisco Velasco /</span> Diseño
              iluminación <span>Antonio Valiente AAI</span>
            </p>
            <p>
              Sonido <span>Víctor Tomé / </span> Maquinaria{" "}
              <span>Jorge Limosnita </span> Asistencia en iluminación{" "}
              <span>Suh- Güein</span>
            </p>
            <p>
              Una producción <span>del Museo Ca2m</span>{" "}
            </p>
            <p>
              Con el apoyo de <span>Corral de La Morería</span>
            </p>
          </div>
        </div>
      ),
      fichaMobile: (
        <div className="container-ficha-centrada">
          <p className="name-ficha">Estrenada en Ca2m y Condeduque.</p>
          <div className="container-ficha-centrada">
            <p>
              Creado por <span>Ernesto Artillo </span> Arquitecto del proyecto{" "}
              <span>Pablo Chaves</span>/Asesoría científica{" "}
              <span>Alicia Navarro</span>
            </p>
            <p>
              Formación:- Guitarra <span>Yerai Cortés </span> - Cante{" "}
              <span>Niño de Elche </span>- Baile{" "}
              <span>Andrés Marín y Rocío Molina</span>
            </p>{" "}
            <p>
              Distribución y coordinación de producción{" "}
              <span>Cal Producciones</span> Ayudante de dirección
              <span>Aitana Sar</span>
            </p>{" "}
            <p>
              Coordinación técnica <span>Txisco Velasco /</span> Diseño
              iluminación <span>Antonio Valiente AAI</span>
            </p>
            <p>
              Sonido <span>Víctor Tomé / </span> Maquinaria{" "}
              <span>Jorge Limosnita </span> Asistencia en iluminación{" "}
              <span>Suh- Güein</span>
            </p>
            <p>
              Una producción <span>del Museo Ca2m</span>{" "}
            </p>
            <p>
              Con el apoyo de <span>Corral de La Morería</span>
            </p>
          </div>
        </div>
      ),
    },
    somosLaGuerra: {
      ficha: "Somos la Guerra || Pablo Chaves",
      description: "Proyecto Somos la Guerra escenografía de Pablo Chaves",
      ficha: (
        <div className="container-ficha-centrada">
          <p className="name-ficha">Estrenada en los Teatros del Canal</p>
          <div className="container-ficha-centrada">
            <p>
              Dirección artística, coreografía, dramaturgia, espacio escénico:
              <span>Luz Arcas</span> Espacio escénico:{" "}
              <span>: Luz Arcas y Pablo Chaves</span>
            </p>
            <p>
              Acompañamiento artístico y dramatúrgico{" "}
              <span>Victoria Aimé y Rafael SM Paniagua </span>
            </p>
            <p>
              Música: <span>Le Parody / </span> Iluminación:{" "}
              <span>Jorge Colomer / </span>Espacio sonoro:{" "}
              <span>Pablo Contreras</span>
            </p>{" "}
            <p>
              Texto: <span>:Luz Arcas y Abraham Gragera / </span> Vestuario:
              <span>
                Luz Arcas, Victoria Aime, Rafael SM Panigua Roberto Martínez
              </span>
            </p>{" "}
            <p>
              Foto y vídeo promocional: <span>Virginia Rota /</span> Diseño
              gráfico: <span>María Peinado</span>
            </p>
            <p>
              Dirección técnica: <span>Cristina L. Bolívar </span>{" "}
            </p>
            <p>
              Diseño y coordinación de producción:{" "}
              <span>Alex Foulkes y Alberto Núñez</span>
            </p>
            <p>
              Producción ejecutiva: <span>Fernando Jariego</span>{" "}
            </p>
          </div>
        </div>
      ),
      fichaMobile: (
        <div className="container-ficha-centrada">
          <p className="name-ficha">Estrenada en los Teatros del Canal</p>
          <div className="container-ficha-centrada">
            <p>
              Dirección artística, coreografía, dramaturgia, espacio escénico:
              <span>Luz Arcas</span> Espacio escénico:{" "}
              <span>: Luz Arcas y Pablo Chaves</span>
            </p>
            <p>
              Acompañamiento artístico y dramatúrgico{" "}
              <span>Victoria Aimé y Rafael SM Paniagua </span>
            </p>
            <p>
              Música: <span>Le Parody / </span> Iluminación:{" "}
              <span>Jorge Colomer / </span>Espacio sonoro:{" "}
              <span>Pablo Contreras</span>
            </p>{" "}
            <p>
              Texto: <span>:Luz Arcas y Abraham Gragera / </span> Vestuario:
              <span>
                Luz Arcas, Victoria Aime, Rafael SM Panigua Roberto Martínez
              </span>
            </p>{" "}
            <p>
              Foto y vídeo promocional: <span>Virginia Rota /</span> Diseño
              gráfico: <span>María Peinado</span>
            </p>
            <p>
              Dirección técnica: <span>Cristina L. Bolívar </span>{" "}
            </p>
            <p>
              Diseño y coordinación de producción:{" "}
              <span>Alex Foulkes y Alberto Núñez</span>
            </p>
            <p>
              Producción ejecutiva: <span>Fernando Jariego</span>{" "}
            </p>
          </div>
        </div>
      ),
    },
    psicosis: {
      ficha: "Psicosis 4.48 || Pablo Chaves",
      description: "Proyecto Psicosis 4.48 escenografía de Pablo Chaves",
      ficha: (
        <div className="container-ficha-centrada">
          <p className="name-ficha">Estrenada en el Teatro Español</p>
          <div className="container-ficha-centrada">
            <p>
              Dirección: <span>Luz Arcas - La Phármaco</span> Con{" "}
              <span>Natalia Huarte</span>
            </p>
            <p>
              Diseño de escenografía: <span>Pablo Chaves</span>
            </p>
            <p>
              Diseño de escenografía: <span>Jorge Colomer / </span> Diseño de
              vestuario: <span>Luz Arcas / </span> Composición música original:{" "}
              <span>Adrián Foulkes</span>
            </p>
            <p>
              Diseño de espacio sonoro: <span>Pablo Contreras / </span>{" "}
              Asistencia artística:
              <span>Victoria Aime</span>
            </p>{" "}
            <p>
              Colaboración artística: <span>Sebastián Vogler </span>/ Mirada
              externa: <span>Teresa Casas</span>
            </p>
            <p>
              Ayudante de dirección: <span>Javier L. Patiño </span> / Residente
              de ayudantía de dirección<span>Cristina Hermida</span>
            </p>
            <p>Una coproducción del Teatro Español y La Phármaco</p>
          </div>
        </div>
      ),
      fichaMobile: (
        <div className="container-ficha-centrada">
          <p className="name-ficha">Estrenada en el Teatro Español</p>
          <div className="container-ficha-centrada">
            <p>
              Dirección: <span>Luz Arcas - La Phármaco</span> Con{" "}
              <span>Natalia Huarte</span>
            </p>
            <p>
              Diseño de escenografía: <span>Pablo Chaves</span>
            </p>
            <p>
              Diseño de escenografía: <span>Jorge Colomer / </span> Diseño de
              vestuario: <span>Luz Arcas / </span> Composición música original:{" "}
              <span>Adrián Foulkes</span>
            </p>
            <p>
              Diseño de espacio sonoro: <span>Pablo Contreras / </span>{" "}
              Asistencia artística:
              <span>Victoria Aime</span>
            </p>{" "}
            <p>
              Colaboración artística: <span>Sebastián Vogler </span>/ Mirada
              externa: <span>Teresa Casas</span>
            </p>
            <p>
              Ayudante de dirección: <span>Javier L. Patiño </span> / Residente
              de ayudantía de dirección<span>Cristina Hermida</span>
            </p>
            <p>Una coproducción del Teatro Español y La Phármaco</p>
          </div>
        </div>
      ),
    },
    losNuestros: {
      ficha: "Los Nuestros || Pablo Chaves",
      description: "Proyecto Los Nuestros escenografía de Pablo Chaves",
      ficha: (
        <div className="container-ficha-centrada">
          <p className="name-ficha">
            Estrenada en el Teatro Valle Inclán, en el Centro Dramático Nacional
            y Teatre Nacional de Catalunya.
          </p>
          <div className="container-ficha-centrada">
            <p>
              Texto y dirección: <span>Lucía Carballal</span>
            </p>
            <p>
              Diseño de escenografía: <span>Pablo Chaves Maza</span>
            </p>
            <p>
              Diseño de iluminación: <span>Pilar Valdelvira AAI</span> / Diseño
              de vestuario: <span>Sandra Espinosa</span>
            </p>
            <p>
              Composición musical y coach vocal: <span>Irene Novoa</span> /
              Diseño de sonido: <span>Benigno Moreno</span>
            </p>
            <p>
              Coreografía y asesoría de movimiento:{" "}
              <span>Belén Martí Lluch</span> / Asesoría sefardí:{" "}
              <span>Eva Chocrón</span>
            </p>
            <p>
              Ayudante de dirección: <span>Javier L. Patiño</span> / Ayudante de
              escenografía: <span>Amalia Elorza Izaguirre</span>
            </p>
            <p>
              Ayudante de iluminación: <span>Marina Cabrero</span> / Ayudante de
              vestuario: <span>Igone Teso AAPEE</span>
            </p>
            <p>
              Tráiler y fotografía: <span>Bárbara Sánchez Palomero</span>
            </p>
            <p>
              Realización de escenografía:{" "}
              <span>May Servicios, Ricardo Vergne, Scnik Movil y Fermisa</span>
            </p>
            <p>
              Producción: <span>Centro Dramático Nacional</span> y{" "}
              <span>Teatre Nacional de Catalunya</span>
            </p>
          </div>
        </div>
      ),
      fichaMobile: (
        <div className="container-ficha-centrada">
          <p className="name-ficha">
            Estrenada en el Teatro Valle Inclán, en el Centro Dramático Nacional
            y Teatre Nacional de Catalunya.
          </p>
          <div className="container-ficha-centrada">
            <p>
              Texto y dirección: <span>Lucía Carballal</span>
            </p>
            <p>
              Diseño de escenografía: <span>Pablo Chaves Maza</span>
            </p>
            <p>
              Diseño de iluminación: <span>Pilar Valdelvira AAI</span> / Diseño
              de vestuario: <span>Sandra Espinosa</span>
            </p>
            <p>
              Composición musical y coach vocal: <span>Irene Novoa</span> /
              Diseño de sonido: <span>Benigno Moreno</span>
            </p>
            <p>
              Coreografía y asesoría de movimiento:{" "}
              <span>Belén Martí Lluch</span> / Asesoría sefardí:{" "}
              <span>Eva Chocrón</span>
            </p>
            <p>
              Ayudante de dirección: <span>Javier L. Patiño</span> / Ayudante de
              escenografía: <span>Amalia Elorza Izaguirre</span>
            </p>
            <p>
              Ayudante de iluminación: <span>Marina Cabrero</span> / Ayudante de
              vestuario: <span>Igone Teso AAPEE</span>
            </p>
            <p>
              Tráiler y fotografía: <span>Bárbara Sánchez Palomero</span>
            </p>
            <p>
              Realización de escenografía:{" "}
              <span>May Servicios, Ricardo Vergne, Scnik Movil y Fermisa</span>
            </p>
            <p>
              Producción: <span>Centro Dramático Nacional</span> y{" "}
              <span>Teatre Nacional de Catalunya</span>
            </p>
          </div>
        </div>
      ),
    },
    lasApariciones: {
      ficha: "Las Apariciones || Pablo Chaves",
      description: "Proyecto Las Apariciones escenografía de Pablo Chaves",
      ficha: (
        <div className="container-ficha-centrada">
          <p className="name-ficha">
            Estrenada en el Centro Dramático Nacional, en la sala Princesa.
          </p>
          <div className="container-ficha-centrada">
            <p>
              Dirección: <span>Juan Ceacero</span> / Dramaturgia:{" "}
              <span>Fernando Delgado-Hierro</span>
            </p>
            <p>
              Escenografía: <span>Pablo Chaves</span> / Iluminación:{" "}
              <span>Rodrigo Ortega</span> / Vestuario:{" "}
              <span>Paola de Diego</span>
            </p>
            <p>
              Diseño sonoro: <span>Daniel Jumillas</span> / Ayudante de
              dirección: <span>María Martínez</span>
            </p>
            <p>
              Reparto: <span>Pablo Chaves</span> y{" "}
              <span>Fernando Delgado-Hierro</span>
            </p>
            <p>
              Producción: <span>Centro Dramático Nacional</span> y{" "}
              <span>Compañía Exlímite</span>
            </p>
          </div>
        </div>
      ),
      fichaMobile: (
        <div className="container-ficha-centrada">
          <p className="name-ficha">
            Estrenada en el Centro Dramático Nacional, en la sala Princesa.
          </p>
          <div className="container-ficha-centrada">
            <p>
              Dirección: <span>Juan Ceacero</span> / Dramaturgia:{" "}
              <span>Fernando Delgado-Hierro</span>
            </p>
            <p>
              Escenografía: <span>Pablo Chaves</span> / Iluminación:{" "}
              <span>Rodrigo Ortega</span> / Vestuario:{" "}
              <span>Paola de Diego</span>
            </p>
            <p>
              Diseño sonoro: <span>Daniel Jumillas</span> / Ayudante de
              dirección: <span>María Martínez</span>
            </p>
            <p>
              Reparto: <span>Pablo Chaves</span> y{" "}
              <span>Fernando Delgado-Hierro</span>
            </p>
            <p>
              Producción: <span>Centro Dramático Nacional</span> y{" "}
              <span>Compañía Exlímite</span>
            </p>
          </div>
        </div>
      ),
    },
    pequenoCumuloDeAbismos: {
      ficha: "Pequeño Cúmulo de Abismos || Pablo Chaves",
      description:
        "Proyecto Pequeño Cúmulo de Abismos  escenografía de Pablo Chaves",
      ficha: (
        <div className="container-ficha-centrada">
          <p className="name-ficha">
            Estrenada en el Centro Dramático Nacional, en la sala Princesa.
          </p>
          <div className="container-ficha-centrada">
            <p>
              Dirección: <span>Cris Blanco</span> / Dramaturgia:{" "}
              <span>Rocío Bello</span>, <span>Cris Blanco</span>,{" "}
              <span>Óscar Bueno</span>, <span>Anto Rodríguez</span>
            </p>
            <p>
              Escenografía: <span>Pablo Chaves</span> / Iluminación:{" "}
              <span>Miguel Ruz Velasco</span> / Vestuario:{" "}
              <span>Jorge Dutor</span>
            </p>
            <p>
              Diseño sonoro: <span>Carlos Parra</span> / Ayudante de dirección:{" "}
              <span>Marta Orozco</span> / Ayudante de escenografía:{" "}
              <span>Lia González Álvarez</span>
            </p>
            <p>
              Reparto: <span>Oihana Altube</span>, <span>Rocío Bello</span>,{" "}
              <span>Cris Blanco</span> e <span>Íñigo Rodríguez-Claro</span>
            </p>
            <p>
              Fotografía: <span>Geraldine Leloutre</span>
            </p>
            <p>
              Producción: <span>Centro Dramático Nacional</span>,{" "}
              <span>Cris Blanco</span> y <span>Festival Grec de Barcelona</span>
            </p>
          </div>
        </div>
      ),
      fichaMobile: (
        <div className="container-ficha-centrada">
          <p className="name-ficha">
            Estrenada en el Centro Dramático Nacional, en la sala Princesa.
          </p>
          <div className="container-ficha-centrada">
            <p>
              Dirección: <span>Cris Blanco</span> / Dramaturgia:{" "}
              <span>Rocío Bello</span>, <span>Cris Blanco</span>,{" "}
              <span>Óscar Bueno</span>, <span>Anto Rodríguez</span>
            </p>
            <p>
              Escenografía: <span>Pablo Chaves</span> / Iluminación:{" "}
              <span>Miguel Ruz Velasco</span> / Vestuario:{" "}
              <span>Jorge Dutor</span>
            </p>
            <p>
              Diseño sonoro: <span>Carlos Parra</span> / Ayudante de dirección:{" "}
              <span>Marta Orozco</span> / Ayudante de escenografía:{" "}
              <span>Lia González Álvarez</span>
            </p>
            <p>
              Reparto: <span>Oihana Altube</span>, <span>Rocío Bello</span>,{" "}
              <span>Cris Blanco</span> e <span>Íñigo Rodríguez-Claro</span>
            </p>
            <p>
              Fotografía: <span>Geraldine Leloutre</span>
            </p>
            <p>
              Producción: <span>Centro Dramático Nacional</span>,{" "}
              <span>Cris Blanco</span> y <span>Festival Grec de Barcelona</span>
            </p>
          </div>
        </div>
      ),
    },
    matrimonioBlanco: {
      ficha: "Matrimonio Blanco || Pablo Chaves",
      description: "Proyecto Matrimonio Blanco  escenografía de Pablo Chaves",
      ficha: (
        <div className="container-ficha-centrada">
          <p className="name-ficha">Estrenada en Réplika</p>
          <div className="container-ficha-centrada">
            <p>
              Texto original: <span>Tadeusz Rozewicz</span> / Versión:{" "}
              <span>Iciar Ventepan</span> y <span>Flavia Forni</span>
            </p>
            <p>
              Dirección: <span>Flavia Forni</span>, <span>Iciar Ventepan</span>{" "}
              y <span>Jaime Cano</span> / Ayudante de dirección:{" "}
              <span>Ander Alvarado</span>
            </p>
            <p>
              Escenografía: <span>Pablo Chaves</span>
            </p>
            <p>
              Vestuario: <span>Teresa Julián</span> / Diseño de iluminación:{" "}
              <span>George Marinov</span>
            </p>
            <p>
              Imagen de cartel: <span>Isabel Méndez</span> / Diseño de cartel:{" "}
              <span>Jaime Cano</span>
            </p>
            <p>
              Producción: <span>Cía. La Peatonal</span> con la ayuda del{" "}
              <span>Instituto Polaco de Cultura</span>
            </p>
          </div>
        </div>
      ),
      fichaMobile: (
        <div className="container-ficha-centrada">
          <p className="name-ficha">Estrenada en Réplika</p>
          <div className="container-ficha-centrada">
            <p>
              Texto original: <span>Tadeusz Rozewicz</span> / Versión:{" "}
              <span>Iciar Ventepan</span> y <span>Flavia Forni</span>
            </p>
            <p>
              Dirección: <span>Flavia Forni</span>, <span>Iciar Ventepan</span>{" "}
              y <span>Jaime Cano</span> / Ayudante de dirección:{" "}
              <span>Ander Alvarado</span>
            </p>
            <p>
              Escenografía: <span>Pablo Chaves</span>
            </p>
            <p>
              Vestuario: <span>Teresa Julián</span> / Diseño de iluminación:{" "}
              <span>George Marinov</span>
            </p>
            <p>
              Imagen de cartel: <span>Isabel Méndez</span> / Diseño de cartel:{" "}
              <span>Jaime Cano</span>
            </p>
            <p>
              Producción: <span>Cía. La Peatonal</span> con la ayuda del{" "}
              <span>Instituto Polaco de Cultura</span>
            </p>
          </div>
        </div>
      ),
    },
    historiaDeUnaMaestra: {
      ficha: "Historia de una Maestra || Pablo Chaves",
      description: "Proyecto Matrimonio Blanco  escenografía de Pablo Chaves",
      ficha: (
        <div className="container-ficha-centrada">
          <p className="name-ficha">Estrenada en CDN en Teatro Valle Inclán</p>
          <div className="container-ficha-centrada">
            <p>
              Dirección: <span>Raquel Alarcón </span>y{" "}
              <span>Laura Ortega </span>
            </p>
            <p>
              Espacio escénico: <span>Pablo Chaves</span>
            </p>
            <p>
              Texto: <span>Aurora Parrilla </span> / Coreografía:{" "}
              <span>Alba Blanco</span>
            </p>
            Espacio sonoro y composición:<span>Kevin Dornan</span>
            <p>
              Iluminación: <span>David Picazo / </span> Vestuario:{" "}
              <span>Paola de Diego </span>
            </p>
            <p>
              Audiovisuales:<span>Elvira Ruiz</span> Producción:{" "}
              <span>CDN</span>
            </p>
          </div>
        </div>
      ),
      fichaMobile: (
        <div className="container-ficha-centrada">
          <p className="name-ficha">Estrenada en CDN en Teatro Valle Inclán</p>
          <div className="container-ficha-centrada">
            <p>
              Dirección: <span>Raquel Alarcón </span>y{" "}
              <span>Laura Ortega </span>
            </p>
            <p>
              Espacio escénico: <span>Pablo Chaves</span>
            </p>
            <p>
              Texto: <span>Aurora Parrilla </span> / Coreografía:{" "}
              <span>Alba Blanco </span>
            </p>{" "}
            Espacio sonoro y composición:<span>Kevin Dornan</span>
            <p>
              Iluminación: <span>David Picazo</span>/ Vestuario:{" "}
              <span>Paola de Diego </span>
            </p>
            <p>
              Audiovisuales: : <span>Elvira Ruiz</span> Producción:{" "}
              <span>CDN</span>
            </p>
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
