import React from 'react';

import {
  FinderSection,
  FinderContainer,
  FinderContent,
  PauloSilveira,
  Speech,
  FormField
} from './styles';

import PauloBase from '../../assets/img/paulo-base.png';
import PauloFace1 from '../../assets/img/rosto1.png';

function Finder({ levels, setCourses }) {
  return (
    <FinderSection>
      <FinderContainer>
        <FinderContent>
          <PauloSilveira>
            <PauloSilveira.Body src={PauloBase} alt="Paulo Silveira avatar" />

            <PauloSilveira.Head src={PauloFace1} alt="Paulo Silveira rosto"/>
          </PauloSilveira>

          <Speech>
            <p>Olá caríssim@ alun@, seja muito bem-vindo ao Alura-Finder.</p>
            <p>Me responde algumas perguntas que eu encontro o curso ideal pra você!</p>
          
            <form>
              <FormField>
                <label>
                  Qual o nível?
                  <select>
                    {
                      levels.map((level) => (
                        <option key={`level_id_${level}`} value={level}>{level}</option>
                      ))
                    }
                  </select>
                </label>
              </FormField>
            </form> 
          </Speech>
        </FinderContent>
      </FinderContainer>
    </FinderSection>
  );
}

export default Finder;
