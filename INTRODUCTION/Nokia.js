const  prompt = require("prompt-sync")();

function mainMenu() {
    console.log("1. Phonebook\n" +
        "2. Messages\n" +
        "3. Chat\n" +
        "4. Call Register\n" +
        "5. Tones\n" +
        "6. Settings\n" +
        "7. Call diver\n" +
        "8. Games\n" +
        "9. Calculator\n" +
        "10. Reminders\n" +
        "11. Clock\n" +
        "12. Profiles\n" +
        "13. Sim services\n")
}

function displayPhonebookMenu() {
    console.log("1. Search\n" +
        "2. Service Nos\n" +
        "3. Add name\n" +
        "4. Erase\n" +
        "5. Edit\n" +
        "6. Assign tone\n" +
        "7. Send b'card\n" +
        "8. Options\n" +
        "9. Speed dials\n" +
        "10.Voice tags\n")
    let input = prompt("Please select an option from the menu above and 0 to go back to main menu: ")
    switch (input){
        case '0':
            main()
            break
        case '1':
            console.log("Searching")
            displayPhonebookMenu()
            break
        case '2':
            console.log("Service nos")
            displayPhonebookMenu()
            break
        case '3':
            console.log("Adding name")
            displayPhonebookMenu()
            break
        case '4':
            console.log("Erasing name")
            displayPhonebookMenu()
            break
        case '5':
            console.log("Editing name")
            displayPhonebookMenu()
            break
        case '6':
            console.log("Assigning tone")
            displayPhonebookMenu()
            break
        case '7':
            console.log("Sending business cards to contacts...")
            displayPhonebookMenu()
            break
        case '8':
            displayOptions()
            break
        case '9':
            console.log("dialling 090")
            displayPhonebookMenu()
            break
        case '10':
            console.log("Searching for voice tags")
            displayPhonebookMenu()
            break
        default:
            displayPhonebookMenu()
    }
}

function displayOptions() {
    console.log("1. Type of view\n" +
        "2. Memory status\n")
    let input = prompt("Please enter 0 to go back to main menu ")
    switch (input) {
        case '0':
            displayPhonebookMenu()
            break
        case '1':
            console.log("View types")
            displayOptions()
            break
        case '2':
            console.log("Memory is status is full")
            displayOptions()
            break
        default:
            displayOptions()
    }

}

function displayMessageMenu() {
    console.log("1. Write messages\n" +
        "2. Inbox\n" +
        "3. Outbox\n" +
        "4. Picture messages\n" +
        "5. Templates\n" +
        "6. Smileys\n" +
        "7. Message settings\n" +
        "8. Info service \n" +
        "9. Voice mailbox number\n" +
        "10.Service command editor\n")
    let input = prompt("Please select an option from the menu above and 0 to go back to main menu: ")
    switch (input) {
        case '0':
            main()
            break
        case '1':
            prompt("Write message here...")
            displayMessageMenu()
            break
        case '2':
            console.log("Inbox Messages here...")
            displayMessageMenu()
            break
        case '3':
            console.log("Outbox Messages here...")
            displayMessageMenu()
            break
        case '4':
            console.log("Picture Messages here...")
            displayMessageMenu()
            break
        case '5':
            console.log("Templates here...")
            displayMessageMenu()
            break
        case '6':
            console.log(":)")
            displayMessageMenu()
            break
        case '7':
            displayMessageSettingsOptions()
            break
        case '8':
            console.log("Info services here..")
            displayMessageMenu()
            break
        case '9':
            console.log("Voice mailbox here..")
            displayMessageMenu()
            break
        case '10':
            console.log("Service command editor here..")
            displayMessageMenu()
            break
        default:
            displayOptions()
    }
}

function displayMessageSettingsOptions() {
    console.log("1. Set\n" +
        "2. Common\n")
    let input = prompt("Please select an option from the menu above and 0 to go back to previous menu: ")
    switch (input) {
        case '0':
            displayMessageMenu()
            break
        case '1':
            displaySetOptions()
            break
        case '2':
            displayCommonOptions()
            break
        default:
            displayMessageSettingsOptions()
    }

}

function displaySetOptions() {
    console.log("1. Message center number\n" +
        "2. Messages sent as\n" +
        "3. Message validity\n")
    let input = prompt("Please enter 0 to go back to main menu ")
    switch (input) {
        case '0':
            displayMessageSettingsOptions()
            break
        default:
            displaySetOptions()
    }
}

function displayCommonOptions() {
    console.log("1. Delivery reports\n" +
        "2. Reply via same center\n" +
        "3. Character support\n")
    let input = prompt("Please enter 0 to go back to main menu ")
    switch (input) {
        case '0':
            displayMessageSettingsOptions()
            break
        default:
            displayCommonOptions()
    }
}

function displayCallRegisterOptions() {
    console.log("1. Missed calls\n" +
        "2. Recieved calls\n" +
        "3. Dialled numbers\n" +
        "4. Erase recent call lists\n" +
        "5. Show call duration\n" +
        "6. Show call costs\n" +
        "7. Call cost settings\n" +
        "8. Prepaid credit \n")
    let input = prompt("Please select an option from the menu above and 0 to go back to previous menu: ")
    switch (input) {
        case '0':
            main()
            break
        case '1':
            displayCallRegisterOptions()
            break
        case '5':
            displayCallDurationOptions()
            break
        case '6':
            displayCallCostOptions()
            break
        case '7':
            displayCallCostSettingsOptions()
            break
        default:
            displayCallRegisterOptions()
    }
}

function displayCallDurationOptions() {
    console.log("1. Last call duration\n" +
        "2. All calls' duration\n" +
        "3. Received calls duration\n" +
        "4. Dialled calls' duration\n" +
        "5. Clear timers\n")
    let input = prompt("Please select an option from the menu above and 0 to go back to previous menu: ")
    switch (input) {
        case '0':
            displayCallRegisterOptions()
            break
        default:
            displayCallDurationOptions()
    }
}

function displayCallCostOptions() {
    console.log("1. Last call cost\n" +
        "2. All calls' cost\n" +
        "3. Clear counters\n")
    let input = prompt("Please select 0 to go back to previous menu: ")
    switch (input) {
        case '0':
            displayCallRegisterOptions()
            break
        default:
            displayCallCostOptions()
    }
}

function displayCallCostSettingsOptions() {
    console.log("1. Call cost limit\n" +
        "2. Show costs in\n")
    let input = prompt("Please select 0 to go back to previous menu: ")
    switch (input) {
        case '0':
            displayCallRegisterOptions()
            break
        default:
            displayCallCostSettingsOptions()
    }
}

function displayTonesMenu() {
    console.log("1. Ringing tone\n" +
        "2. Ringing volume\n" +
        "3. Incoming call alert\n" +
        "4. Composer\n" +
        "5. Message alert tone\n" +
        "6. Keypad tones\n" +
        "7. Warning and game tones\n" +
        "8. Vibrating alert\n" +
        "9. Screen saver\n")
    let input = prompt("Please select 0 to go back to previous menu: ")
    switch (input) {
        case '0':
            main()
            break
        default:
            displayTonesMenu()
    }
}

function displaySettingMenu() {
    console.log("1. Call settings\n" +
        "2. Phone settings\n" +
        "3. Security settings\n" +
        "4. Restore factory settings\n")
    let input = prompt("Please select an option from the menu above and 0 to go back to previous menu: ")
    switch (input) {
        case '0':
            main()
            break
        case '1':
            displayCallSettingsMenu()
            break
        case '2':
            displayPhoneSettingMenu()
            break
        case '3':
            displaySecuritySettingsMenu()
            break
        case '4':
            console.log("Phone set to default settings")
            displaySettingMenu()
            break
        default:
            displaySettingMenu()
    }
}

function displayCallSettingsMenu() {
    console.log("1. Automatic redial\n" +
        "2. Speed dialling\n" +
        "3. Call waiting options\n" +
        "4. Own number sending\n" +
        "5. Phone line in use\n" +
        "6. Automatic answer\n")
    let input = prompt("Please select 0 to go back to previous menu: ")
    switch (input) {
        case '0':
            displayTonesMenu()
            break
        default:
            displayCallSettingsMenu()
    }
}
function displayPhoneSettingMenu() {
    console.log("1. Language\n" +
        "2. Cell info display\n" +
        "3. Welcome note\n" +
        "4. Network selection\n" +
        "5. Lights\n" +
        "6. Confirm SIM service actions\n")
    let input = prompt("Please select 0 to go back to previous menu: ")
    switch (input) {
        case '0':
            displayTonesMenu()
            break
        default:
            displayPhoneSettingMenu()
    }
}

function displaySecuritySettingsMenu() {
    console.log("1. PIN code request\n" +
        "2. Call barring service\n" +
        "3. Fixed dialling\n" +
        "4. Closed user group\n" +
        "5. Phone security\n" +
        "6. Change access codes\n")
    let input = prompt("Please select 0 to go back to previous menu: ")
    switch (input) {
        case '0':
            displayTonesMenu()
            break
        default:
            displaySecuritySettingsMenu()
    }
}

function displayClockMenu() {
    console.log("1. Alarm clock\n" +
        "2. Clock settings\n" +
        "3. Date setting\n" +
        "4. Stopwatch\n" +
        "5. Countdown timer\n" +
        "6. Auto update of date and time\n")
    let input = prompt("Please select 0 to go back to previous menu: ")
    switch (input) {
        case '0':
            main()
            break
        default:
            displayClockMenu()
    }
}

function main() {
    mainMenu()
    let input = prompt("Please select an option from the menu above enter 0 to exit: ")
    switch (input){
        case '0':
            console.log("Powering off....")
            process.exit(0)
            break
        case '1':
            displayPhonebookMenu()
            break
        case '2':
            displayMessageMenu()
            break
        case '3':
            console.log("Chatting..")
            break
        case '4':
            displayCallRegisterOptions()
            break
        case '5':
            displayTonesMenu()
            break
        case '6':
            displaySettingMenu()
            break
        case '7':
            console.log("Call diverting")
            break
        case '8':
            console.log("Play snake xenzia!")
            break
        case '9':
            console.log("Calculator working!")
            break
        case '10':
            console.log("Set reminders")
            break
        case '11':
            displayClockMenu()
            break
        case '12':
            console.log("Select a profile")
            break
        case  '13':
            console.log("MTN services")
            break
        default:
            console.log("Invalid input try again")
            mainMenu()
    }

}
main()