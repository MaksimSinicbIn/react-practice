import React from 'react';
import './App.css';
import { Rating } from './components/Rating/Rating';
import { OnOff } from './components/OnOff/OnOff';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import { UncontrolledRating } from './components/UncontrolledRating/UncontrolledRating';

// function declaration
function App() {
    // полезное что-то
    // обязана вернуть JSX
    return (
        <div className={'App'}>
            <PageTitle title={"This is APP component"} />

            <UncontrolledAccordion titleValue={"Menu"} />
            <UncontrolledAccordion titleValue={"Users"} />

            <UncontrolledRating  />
            <UncontrolledRating  />
            <UncontrolledRating  />
            <UncontrolledRating  />
            <UncontrolledRating  />
            <UncontrolledRating  />

            <div>
                <OnOff/>
                <OnOff/>
            </div>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle (props: PageTitlePropsType) {
    return <h1>{ props.title }</h1>
}

export default App;
