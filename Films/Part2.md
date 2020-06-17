# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Film Project, Part 2

## Your Mission (If You Choose to Accept It...)

...is to build a film app that will feature a list of all of the recent popular movies. A user can scroll through the titles, click one for more details, and save it to their favorites.

Note, this is just the seciond phase of this project; the app won't be completed until a future lesson. For today, the plan is to identify the overall application structure, then create the individual components that support that structure. You'll pass films as props to each component and ultimately use iteration to render one component for each film. At the end of this exercise, you will have the app seen here:

![](images/film-1.png)

### Ready?

OK. If you have your own working version from completing Part 1 then feel free to use that or you can fork this [CodeSandbox](https://codesandbox.io/s/films-app-part-1-solution-45vux) that contains a working  version of Part 1. 

Here is the [React Architecture](https://docs.google.com/drawings/d/1XcAUc8jz1XN_2r1G7eVOUbxFWZRJNspof1EPlDJPFWY/edit) up till now.

Here is a [working version of the app up to Part 2](https://q39ku.codesandbox.io/) completed with only the steps in this readme. Feel free to investigate the app in React Dev Tools to see whats going on.

Here is the [final solution](https://fufid.codesandbox.io/) you will be building over the next several days.

**Important**: After each step that follows, check your application to see how it looks before moving on. It's good practice to be sure your app is working correctly before adding new functionality.

Don't forget any <code>import</code> statements as you add more files.

# Your Mission

Your goal today is to add some events to your app. You'll keep these events simple for now — each will simply print a message to the console.

In the future, however, you'll be able to add films to your list of favorites, filter the films to see only your favorites, and view the details for a specific film. Your work today will make that possible.

![](images/film-2.png)

### Part 1: Adding Favorites

#### Step 1: Add a new `Fave` component.

Create a new component called `Fave` that will eventually handle if a movie is a user's favorite. The `Fave` component should return what you see here.

In the `FilmRow` component, underneath the `film-summary` `div`, render the `Fave` component.

In your browser, the icon should appear in the bottom-right corner of each film row.

```html
<div className="film-row-fave add_to_queue">
  <p className="material-icons">add_to_queue</p>
</div>
```

#### Step 2: Define a `handleClick()` function in `Fave`.

Inside the `Fave` component, define a function called `handleClick()`. The function should accept an event (`e`) as an argument. Simply log out a message like `"handling Fave click!"` for now.

Because you aren't using this anywhere yet, nothing should change.

#### Step 3: Add an `onClick` in `Fave`.

Now that you have a function that handles when a user clicks a movie, connect it to the UI. In the `div` located in`Fave` add a parameter of `onClick={handleClick}`.

In your browser's JavaScript console, you should see the message `handleClick` printed out when the `div` is clicked.

That's all! Your click is not yet adding favorites, but it's working. Later, you'll modify your app so that when the `Fave` icon is clicked, it adds or removes the selected movie from the user's favorites array.

### Part 2: Handling Filter Toggling

Eventually, you'll want an "ALL" heading and a "FAVES" heading that are clickable links. When the user clicks "ALL," the left sidebar will show all movies; when the user clicks "FAVES," the left sidebar will show only their favorite movies. You'll make the basis of that next.

#### Step 1: Define a `handleFilterClick()` function in `FilmListing`.

First, set up the function that will determine which movies are shown in the list. You'll need to be able to tell if you are showing the user all of the movies or if you are filtering down to only display some of them.

In `FilmListing`, create a `handleFilterClick()` function that takes a `filter` string as an argument. For now, just print a message that says `Setting filter to` and the `filter` argument.

This new function isn't connected to a button in the UI yet, so nothing should change.

#### Step 2: Add provided markup to display the "ALL"/"FAVES" menu.

Add some markup to the `FilmListing` component so that you can have something worth clicking. You'll keep the "Films" heading; underneath it, you'll add two categories, "ALL" and "FAVES." You're also preparing to display the film's length, which you aren't using yet.

Change the `FilmListing` component to render what is shown here.

If you check your browser, these subheadings should appear in the left column.

```html
<div className="film-list">
  <h1 className="section-title">FILMS</h1>
  <div className="film-list-filters">
    <div className="film-list-filter">
      ALL
      <span className="section-count">{props.films.length}</span>
    </div>
    <div className="film-list-filter">
      FAVES
      <span className="section-count">0</span>
    </div>
  </div>

  {allFilms}
</div>
```

#### Step 3: Add `onClick` inside `FilmListing` to trigger filtering to `'faves'`.

Now you have an "ALL" section and a "FAVES" section, you can hook that filtering function you just created up to them.

Add an `onClick` inside `FilmListing` so that, when "FAVES" is clicked, it calls the `handleFilterClick()` method you created with the `'faves'` parameter.

Try clicking "FAVES." Does it print to the console?

<details>
  <summary>Hint</summary>
  This will look like this:

<code>onClick={() => handleFilterClick('faves')}</code>

</details>

#### Step 4: Add `onClick` inside `FilmListing` to trigger filtering to `'all'`.

Now that "FAVES" is clickable, the next step is to make "ALL" clickable, as well.

Add an `onClick` inside `FilmListing` so that, when "ALL" is clicked, it calls the `handleFilterClick()` method with an argument of `'all'`.

Now, you should see a message in the console when you click either option. Later, instead of viewing a message, clicking either option will display the correct list of movies to the user — you've assured that these options are clickable, which is an important first step.

### Part 3: Handling Film Details

#### Step 1: Define a `handleDetailsClick()` function inside `FilmRow`.

You aren't going to create the large, detailed view of the film that will be displayed on the right column just yet, but you'll start setting up for it.

Inside `FilmRow`, define a function called `handleDetailsClick()`. The function should accept a film as an argument. Print out `Fetching details for` and the film title to the console.

Because this function is not yet connected to the UI, nothing will change.

#### Step 2: Add a click handler to call the new function with a `film` object.

Now, connect `handleDetailsClick()`. Add an `onClick` to `FilmRow` so that your message gets printed whenever you click on a film row — don't forget to pass the argument!

You should be able to check this in your console by clicking any film row.

### Part 4: Adding State to the `Fave` Component

#### Step 1: Create an initial state for the `Fave` component and set its initial state

You have now triggered the events you'll need to update your app. Next, you'll add states to your app — data that will change (e.g., if a user adds a film to the "FAVES" list).

The first state you'll add will address whether or not a currently selected film is a user's favorite.

Add state to the `Fave` component and call it ```[isFave, setIsFave] = useState(false)```

#### Step 2: Bind your event handler to this component.

Use the new fat arrow syntax `=>` when creating the function to bind the context.

#### Step 3: Set the state in your event handler.

When the user clicks the `Fave` icon/button to add or remove a film from their favorites list, the app should change the film's `isFave` state to reflect that.

Inside of the `handleClick()` method on the `Fave` component, use `setIstFave` to toggle the value of `isFave`. "Toggle" means you always want to set the new value to the opposite of the current value.

Remember to use an arrow function to create your event.

<details>
  <summary>Hint: One way to do this could be:</summary>
  <code>isFave: !isFave</code>
</details>

#### Step 4: Set the `className` on `div` based on the `IsFave` state.

You now want the `className` attribute on the `div` to dynamically update when the state is changed. Currently, the `className` on the `div` is `add_to_queue`. However, if the film has already been favorited, then the film is already in the queue. Therefore, when `isFave: true`, the `className` should instead be `remove_from_queue`.

Note: This will be easier to read if you determine which class to set first, store that value in a variable, then insert that variable into the `className` attribute.

You need to make the following happen:

- When `isFave: true`, you want to give the `div` the `remove_from_queue` class. When `isFave: false`, you want to give the `div` the `add_to_queue` class.
- You also want to change the text that's rendered in the `p` to be the same as the text that's in the class — `remove_from_queue` or `add_to_queue`.

<details>
  <summary>Hint: A more advanced and succinct way to write this function could be as a ternary statement.:</summary>
  <code>const className = isFave ? 'remove_from_queue' : 'add_to_queue';</code>



You can drop this in the `JSX` of your component. This checks if the current `isFave` state is `true` or `false`.

If it's `true`, it sets the `const` variable `isFave` to `remove_from_queue`; if it's `false`, it sets the `const` variable `isFave` to `add_to_queue`. This is a ternary.

</details>

Once you have this, clicking the "Add" icon in each row should change the icon that's displayed.

### Part 5: Adding State to the `FilmListing` Component

#### Step 1: Set the initial state.

Currently, you have the "ALL" and "FAVE" headings, but all films are always shown. Next, you'll add a state so you can track if the user is currently filtering to view _ALL_ movies or only their _FAVE_ movies.

By default, a user will be viewing the entire list of movies.

In the `FilmListing` component, set `state` to an object with a name of `filter, setFilter` and a value of `all`. This will set up the component's initial state.

#### Step 2: Set the state in your event handler.

The `handleFilterClick()` method is the one that's called when a user clicks "ALL" or "FAVES," so it's where you'll change the filter.

Inside of using the `handleFilterClick()` method on the `FilmListing` component, use `state` to set the value of `filter` to the value passed to the event handler.

#### Step 3: Set the `className` on `div` based on `filter`'s state.

To give the user a clue as to where they are, the "ALL" and "FAVES" `div`s should change color depending on which is active. In the CSS, we've already set the colors using a class; you'll need to dynamically change which class each `div` has.

You now want the `className` attribute on each `.film-list-filter` `div` to dynamically update when the state is changed. When `filter: all`, you want to give the `div` the class `is-active` to the `ALL` filter. When `filter: faves`, you want to give the `div` the class `is-active` to the `FAVES` filter.

<details>
  <summary>Hint: One way to do this could be by adding a line similar to this (that's different for each <code>div</code>) into the <code>className</code> parameter.</summary>

This line in particular checks if the `filter` state is currently `'all'`; if it is, it sets the value to `is-active`. If it isn't, it does nothing.
<br>
`{filter === 'all' ? 'is-active' : ''}`

</details>

<details>
  <summary>Still stuck? The overall <code>div</code> for "ALL" will look like this:</summary>

```js
<div className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`} onClick={() => handleFilterClick('all')}>
```

(Don't forget to change it for the other <code>div</code>.)

</details>
