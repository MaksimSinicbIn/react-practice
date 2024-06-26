import React, { useCallback, useMemo } from "react"
import { useState } from "react"

export default {
    title: 'useMemo',
}


export const DifficultCountingExample = () => {

    const [a, setA] = useState(3)
    const [b, setB] = useState(3)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo( () => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++;
                const fakeValue = Math.random();
            }
            resultA = resultA * i;
        }
        return tempResultA
    },[a])

    for (let i = 1; i <= a; i++) {
        let fake = 0;
        while (fake < 100000000) {
            fake++;
            const fakeValue = Math.random();
        }
        resultA = resultA * i;
    }
    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }
    

    return <>
        <input value={a} onChange={ (e) => setA(parseInt(e.currentTarget.value))}/>
        <input value={b} onChange={ (e) => setB(parseInt(e.currentTarget.value))}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

const UsersSecret = (props: {users: Array<string>}) => {
    console.log('UsersSecret');
    return <div>
            {props.users.map((u, index) => <div key={index}>{u}</div>)}
        </div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo');
    
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem']);

    const newArray = useMemo( () => {
        const newArray = users.filter( u => u.toLowerCase().indexOf('a') > -1)
        return newArray;
    }, [users] )

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }


    return <>
        <button onClick={ () => setCounter(counter+1)}>+</button>
        <button onClick={addUser}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}

export const LikeUseCallback= () => {
    console.log('LikeUseCallback');
    
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML']);

    const memoizedAddBook = useMemo(() => {
        return () => {
            console.log(books);
            const newBook = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBook)
        }
    }, [books] )

    const memoizedAddBook2 = useCallback( () => {
            console.log(books);
            const newBook = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBook)
        }, [books] )

    return <>
        <button onClick={ () => setCounter(counter+1)}>+</button>
        {counter}
        <Books addBook={memoizedAddBook2}/>
    </>
}

type BooksSecretPropsType = {
    addBook: () => void
}

const BooksSecret = (props: BooksSecretPropsType) => {
    console.log('BooksSecret');
    return <div>
            <button onClick={() => props.addBook()}>add book</button>
        </div>
}

const Books = React.memo(BooksSecret)
