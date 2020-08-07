import React, { useState } from 'react';
import coursesRepository from '../../repositories/courses';

import CoursesList from '../CoursesList';

import {
  FinderSection,
  FinderContainer,
  FinderContent,
  PauloSilveira,
  Speech,
  ListLabels,
  FormField,
  Button
} from './styles';

import PauloBase from '../../assets/img/paulo-base.png';
import PauloFace1 from '../../assets/img/rosto1.png';
import PauloFace2 from '../../assets/img/rosto2.png';

function Finder({ levels, times }) {
  /* FORM STATES */
  const [formLevel, setFormLevel] = useState(1);
  const [formHour, setFormHour] = useState(1);
  const [formKeyword, setFormKeyword] = useState('');
  
  const [coursesFinded, setCoursesFinded] = useState([]);
  const [speech, setSpeech] = useState(
    `Olá caríssim@ alun@, seja muito bem-vindo ao Alura-Finder.
    Eu sou o Paulo Silveira, CEO da Alura e vou encontrar os cursos ideais pra você!`
    );

  async function handleSearch(event, data) {
    event.preventDefault();
    
    const speechElement = document.getElementById('speech');
    const formElement = document.getElementById('form');
    const retryElement = document.getElementById('retry');
    const pauloHeadThinkingElement = document.getElementById('paulo-head-thinking');
    const pauloHeadHappyElement = document.getElementById('paulo-head-happy');

    const allCourses = await coursesRepository.getAll();
    const findedCourses = allCourses.filter((course) => (
      course.nivel === data.formLevel &&
      course.nome.toLowerCase().includes(data.formKeyword.toString().toLowerCase())
    ));

    /* Paulo animation */
    speechElement.setAttribute('style', 'transform: scale(0); transition: 700ms;');
    formElement.setAttribute('style', 'display: none;');
    pauloHeadThinkingElement.setAttribute('style', 'animation: spin 1.1s linear;');

    setTimeout(() => {
      if (findedCourses.length > 0) {
        setCoursesFinded(findedCourses);
        setSpeech(findedCourses.length > 1 
          ? `Encontrei! Aqui está uma lista dos ${findedCourses.length} cursos que achei.`
          : 'Encontrei um! Consegui achar apenas um curso com essas especificações. Da uma olhada...'
        )

        pauloHeadThinkingElement.setAttribute('style', 'display: none;');
        pauloHeadHappyElement.setAttribute('style', 'display: initial;');
      } else {
        setSpeech(`
          Poxa vida, não encontrei nenhum curso com as especificações que você passou.
          Por isso peguei todos os cursos do nível que você escolheu. Da uma olhada...
        `)

        retryElement.setAttribute('style', 'display: initial; color: var(--primary); font-weight: bold;');
      }

      speechElement.setAttribute('style', 'transform: scale(1); transition: 700ms;');
      speechElement.setAttribute('style', 'max-width: 100%; height: 90%;');
    }, 1150);
      
  }

  return (
    <FinderSection>
      <FinderContainer>
        <FinderContent>
          <PauloSilveira>
            <PauloSilveira.Body src={PauloBase} alt="Paulo Silveira avatar" />

            <PauloSilveira.HeadThinking id="paulo-head-thinking" src={PauloFace1} alt="Paulo Silveira rosto"/>
            <PauloSilveira.HeadHappy id="paulo-head-happy" src={PauloFace2} alt="Paulo Silveira rosto"/>
          </PauloSilveira>

          <Speech id="speech">
            <h1>{speech}</h1>
            
            {
              coursesFinded.length !== 0 &&
              (
                <>
                  <ListLabels>
                    <ListLabels.Label>
                      <h2>Nome</h2>
                    </ListLabels.Label>

                    <ListLabels.Label>
                      <h2>Nível</h2>
                    </ListLabels.Label>

                    <ListLabels.Label>
                      <h2>Duração</h2>
                    </ListLabels.Label>
                  </ListLabels>
                  <Speech.List>
                    <CoursesList courses={coursesFinded} />
                  </Speech.List>
                </>
              )
            }

            <a href="/" id="retry" style={{ display:"none" }}>
              Tenta redefinir sua busca clicando aqui.
            </a>
          
            <form id="form">
              <FormField>
                <label>
                  Qual nível de conhecimento você espera?
                  <select
                    name={"level"}
                    value={formLevel}
                    onChange={(event) => setFormLevel(event.target.value)}
                  >
                    {
                      levels.map((level) => (
                        <option key={level.id} value={level.id}>{level.name}</option>
                      ))
                    }
                  </select>
                </label>
              </FormField>

              {/* <FormField>
                <label>
                  Mais ou menos quantas horas de curso é do seu interessante?
                  <select
                    name={"hour"}
                    value={formHour}
                    onChange={(event) => setFormHour(event.target.value)}
                  >
                    {
                      times.map((hour) => (
                        <option key={hour} value={hour}>{hour}</option>
                      ))
                    }
                  </select>
                </label>
              </FormField> */}

              <FormField>
                <label>
                  Agora me fala uma palavra chave do tema que tem interesse em aprender...
                  <input
                    type={"text"}
                    name={"key-word"}
                    value={formKeyword}
                    onChange={(event) => setFormKeyword(event.target.value)}
                    placeholder="Por exemplo 'marketing', 'android', 'photoshop'"
                  />
                </label>
              </FormField>

              <Button onClick={(event) => handleSearch(event, { formLevel, formHour, formKeyword })}>
                Pode procurar
              </Button>
            </form> 
          </Speech>
        </FinderContent>
      </FinderContainer>
    </FinderSection>
  );
}

export default Finder;
