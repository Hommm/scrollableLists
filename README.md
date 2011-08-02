# scrollableLists

This jquery plugin makes it easy to turn your long lists into shorter ones that are scrollable.  It works on both ol and ul

Features:

- Easily turn ordered or unordered lists into scrollable lists
- Configurable
- No ugly scrollbars

Contributions and comments are welcome using Github at:
http://github.com/mvilrokx/scrollableLists

Please note that scrollableLists requires:

- jquery >= 1.5.0

(that is the version I tested with, it probably works though with much earlier versions.  Let me know which ones and I will update this README)

## Installation

1. Download this git
2. Add scrollableLists.js to your public javascript directory

## Configuration

- li_height             : (integer) - height of the individual list items in the list in px (defaults to 20px)
- per_page              : (integer) - number of items per page (defaults to 10)
- a_color               : (string) - font color of up/down link (defaults to '#000')
- a_background          : (string) - background color of up/down link (defaults to '#fff')
- a_hover_color         : (string) - font color of up/down link when hovering over it (defaults to '#fff')
- a_hover_background    : (string) - background color of up/down link when hovering over it (defaults to '#555')
- plugin_class          : (string) - class that gets added to target only scrollableList html elements, there really is no need to change this (defaults to '_scrollable-list_')
- up_symbol             : (string) - string used to represent scroll Up (defaults to '&uarr;')
- down_symbol           : (string) - string used to represent scroll Down (defaults to '&darr;')
- symbol_size           : (string) - font-size of up/down link (defaults to '14px')

## Usage

1. Call the scrollableLists jquery function on any ul or ol you want to transform into a scrollable list

E.g. given the following list

    <ul class="scrollable-list">
      <li><a href="#">Element</a></li>
      <li>Element</li>
      <li>Element</li>
      <li>Element</li>
      <li>Element</li>
      <li>Element</li>
      <li>Element</li>
      <li>Element</li>
    </ul>

you can add the following to the head-section of your html file:

    <script>
      $(function() {
        $('.scrollable-list').scrollableLists({'per_page'  : 5, symbol_size: '20px'});
      });
    </script>

See the included example.html file for further details.

## Bugs & Contribution

Please use Github to report bugs, feature requests and submit your code:
http://github.com/mvilrokx/scrollableLists

- author: Mark Vilrokx
- date: 2011/31/07

