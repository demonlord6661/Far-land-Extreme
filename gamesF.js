const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state ={}

function startGame() {
 state = {}
 showTextNode(1)
}

function showTextNode(textNodeindex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeindex)
    textElement.innerText = textNode.text
while(optionButtonsElement.firstChild){
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
}
    textNode.options.forEach(option => {
        if (showOption(option)){
            const button = document.createElement('button')
            button.innerText = option.text
            button.classlist.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}
function showOption(option) {
    return Option.requiredState == null || Option.requiredState(state)
    
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    state = Object.assign(state, option.setstate)
    showTextNode(nextTextNodeid)
}

const textNodes = [
    {
        id: 1,
        text: 'You wake with a headache and you seem to be injured with a large wooden door in front of you chain cuffs look like they line the walls you yourself have one hand cuffed as well as your clothing seems to be in peices but a Key made of sliver is in your hand you wonder why?',
        options: [
            {
                text: 'Try the key on your lock',
                setstate: { sliverkey: true },
                nextText: 2
            },
            {
                text: 'strugle with the chain trying to break it(May have consequences!)',
            },
            {
                id: 2,
                text: 'You unlock the Cuff and gain control of your hand and the door in front is unlocked as you walk outside you see a gaint humanoid thing cross your eye gland you did not make any noise.',
                options: [
                    {
                        text: 'follow the beast that walked past now',
                        /*setState:{ sliverkey: flase, magic: true}*/
                        nextText: 2.5
                    },
                    {
                        text: 'Take the steps lower into the stragne palce and open the second door with words that seem to spell library',
                        requiredState: (currentState) => currentState.sliverkey,
                        nextText: 3
                    }
                ]
            },
            {
                id: 2.5,
                text: 'You follow the thing and it turns and attacks killing you in one hit(either close the tab or go back a turn to change your fate)',
            },
            {
                id: 3,
                text: 'You take your time going down the stairs and reach the door openning it slowly as you do you slowly enter a room full of books a thought comes to you to look for book that may lead you out at least explain what you are doing here or at least where you are you find three books at the center of the room you can only one of them.',
                options: [
                    {
                        text: 'One book teaches you how to control internal energy and practice to get stronger',
                        nextText: 4
                    },
                    {
                        text: 'The second book will teach you how to craft various items and will then on be used for that purpose',
                        nextText: 5
                    },
                    {
                        text: 'The thrid book will show you how to control Mana and teach you the first set of basic spells for every catagory of element',
                        nextText: 6
                    },
                ]
            },
            {
            id: 4,
            text:'This is the end of the current game and i hope that you will contine to play in the future',
            nextText: -1
            },
            {
                id: 5,
                text:'This is the end of the current game and i hope that you will contine to play in the future',
                nextText: -1
            },
            {
                id: 6,
                text:'This is the end of the current game and i hope that you will contine to play in the future',
                nextText: -1
            }
        ]
    }
]

startGame()