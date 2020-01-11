import React from "react";
import styled from "styled-components";
import Box from "./Box";

const Grid = styled(Box)({
  "background-image":
    "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMS43IDIzIj48dGl0bGU+cGF0dGVybjwvdGl0bGU+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48cG9seWdvbiBwb2ludHM9IjMxLjUgMjIuOCAwLjIgMC4yIDAuMiAwLjIgMzEuNSAyMi43IDMxLjUgMjIuOCIgZmlsbD0iI2MwNTBlZSIgc3Ryb2tlPSIjYzA1MGVlIiBzdHJva2UtbGluZWpvaW49ImJldmVsIiBzdHJva2Utd2lkdGg9IjAuNCIgb3BhY2l0eT0iMC43NSIvPjxwb2x5Z29uIHBvaW50cz0iMC4yIDIyLjggMzEuNSAwLjIgMzEuNSAwLjIgMC4yIDIyLjcgMC4yIDIyLjgiIGZpbGw9IiNjMDUwZWUiIHN0cm9rZT0iI2MwNTBlZSIgc3Ryb2tlLWxpbmVqb2luPSJiZXZlbCIgc3Ryb2tlLXdpZHRoPSIwLjQiIG9wYWNpdHk9IjAuNzUiLz48L2c+PC9nPjwvc3ZnPg==)",
  "background-size": "5%",
  "background-repeat": "no-repeat" /* Do not repeat the image */
});

function BackgroundPanelGrid(props) {
  return <Grid {...props} />;
}

export default BackgroundPanelGrid;
