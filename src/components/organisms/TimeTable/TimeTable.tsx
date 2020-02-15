import React, { FC, useState, useEffect } from 'react';
import InputBase from '@material-ui/core/InputBase';
import styled from 'styled-components';
import { cardRows, timeColumnElements } from 'utils/data';
import { PageContext } from 'utils/contexts';
import TimeColumn from '@/molecules/TimeColumn/TimeColumn';
import WeekRow from '@/molecules/WeekRow/WeekRow';
import { CardActions } from '@/molecules/Card/Card';
import CardRow from '@/molecules/CardRow/CardRow';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

// export interface TableState {
//   open: boolean;
// }

export interface BlockState {
  I_A: string;
  I_B: string;
  II_A: string;
  II_B: string;
  III_A: string;
  III_B: string;
  IV_A: string;
  IV_B: string;
  V_A: string;
  V_B: string;
  VI: string;
}

const TimeTable: FC<{}> = () => {
  const [state, setState] = useState<BlockState>({
    I_A: '',
    I_B: '',
    II_A: '',
    II_B: '',
    III_A: '',
    III_B: '',
    IV_A: '',
    IV_B: '',
    V_A: '',
    V_B: '',
    VI: '',
  });

  const [currentBlock, setCurrentBlock] = useState('I_A')

  const [form, toggleForm] = useState(false);

  const handleChange = 
    (event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    event.persist();
    setState(prevState => ({
      ...prevState,
      [currentBlock]: event.target.value,
    }));
    console.log(event.target.value)
    }

  const handleForm = () => {
    toggleForm(false);
    localStorage[currentBlock] = state[currentBlock];
  }


  const cardActions: CardActions = {
    onActionAreaClick: block => {
      toggleForm(true);
      setCurrentBlock(block);
    },
    onIconClick: blockName => {
      localStorage.removeItem(blockName);
      setState({
        ...state,
        [blockName]: '',
      });
    }
  };

  useEffect(() => {
    let subjectName = '';
    Object.keys(state).map(async block => {
      subjectName = await localStorage.getItem(block);
      if (subjectName) {
        setState(prevState => {
          const newState = {
            ...prevState,
            [block]: subjectName,
          };
          return newState;
        });
      }
    });
  }, []);
  return (
    <PageContext.Provider value={{ class: state, setClass: setState }}>
      <TimeTableContainer>
        <Header>
          <WeekRow />
        </Header>
        <Contents>
          <TimeColumn elements={timeColumnElements.elements} />
          <CardContainer>
            {cardRows.map((cardRowElements, i) => (
              <React.Fragment key={i}>
                {i === 4 && <Blank />}
                <CardRow
                  cardRowElements={cardRowElements}
                  cardActions={cardActions}
                  key={i}
                />
              </React.Fragment>
            ))}
          </CardContainer>
        </Contents>
      </TimeTableContainer>
      <Dialog open={form} onClose={handleForm}>
        <FormContainer>
          <InputBase
            autoFocus={true}
            onBlur={handleChange}
            fullWidth={true}
            value={state[currentBlock] ? state[currentBlock] : ''}
          />
          <ChangeButton>
            <Button onClick={handleForm} color="primary">
              Save changes
            </Button>
          </ChangeButton>
        </FormContainer>
      </Dialog>
    </PageContext.Provider>
  );
};

const TimeTableContainer = styled.div`
  width: 100%;
  padding: 8px;
  border: solid 0.5px #e3e3e3;
`;

const Header = styled.div`
  width: 100%;
  height: 40px;
  padding-left: 55px;
`;

const Contents = styled.div`
  display: flex;
  width: 100%;
`;

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const Blank = styled.div`
  height: 40px;
`;

const FormContainer = styled.div`
  width: 300px;
  height: 100px;
  padding: 16px;
`;

const ChangeButton = styled.div`
  text-align: right;
`

export default TimeTable;
