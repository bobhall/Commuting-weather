Commuting-weather
=================

This is a log of the precipitation experienced during my commute from Crown Hill to downtown Seattle. I wanted to choose a system that would enable me to keep a good log month after month. Instead of trying to rate how rainy it was, I decided to choose an extremely simple scheme where each leg of my commute (morning portion or evening portion) gets assigned as Wet or Dry. Dry means that exactly zero drops of rain were felt. I assign a commuting leg as Wet if any reasonable person could ask "Does this count as rain?" -- so this could include very thick fog that is bordering on rain. When you see Dry marked in the log, it means bone dry.

Morning time commutes are typically somwhere between 8am and 9:30am. Evening commutes range from 5pm to 6:30pm.

data.txt is a CSV with three fields: date, time, condition

date
A date represented in MM-DD-YYYY format

time
Either 'M' (morning) or 'E' (evening).

condition
Either 'W' (wet) or 'D' (dry).