import random

def guessgame():
    print('Guessing Game\nEnter range of numbers:')
    
    start=int(input("Start: "))
    end=int(input("End: "))
    guess=random.randint(start,end);
    print("I have a number, can u guess it?")
    allowed=5
    made=0
    print(f"You have {allowed} attempts to guess it. Good luck!\n")
    while made<allowed:
        g=int(input("Make a guess:"))
        made+=1
        if g==guess:
            print(f"You guessed the number in {made} attempts! Congrats")
            break
        elif g<guess:
            print("My number is higher than that")
        elif g>guess:
            print("My number is lower than that")
            
        if made==allowed:
            print("Sorry, attempts finished. Game over.")

    again=input("Do you want to play again? (yes/no): ")
    if again=='yes':
        guessgame()


guessgame()