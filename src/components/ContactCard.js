import React from "react";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import IconText from "./IconText";
import * as Icons from "./icons";

import { connect } from "react-redux";
import * as actions from "../store/actions";

function ContactCard({
  ID,
  Phone,
  City,
  Name,
  hasChildren,
  childItems,
  showingMore = false,
  onRemove = () => {},
  onExpand = () => {},
  expanded = false
}) {
  function handleRemove() {
    onRemove(ID);
  }

  return (
    <Box marginY={2}>
      <Card elevation={4}>
        <CardContent>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Typography
              variant="caption"
              color="textSecondary"
              children={`#${ID}`}
            />
            <Button
              onClick={handleRemove}
              size="small"
              variant="outlined"
              color="secondary"
            >
              <Icons.Remove />
              Remove
            </Button>
          </Grid>
          <IconText
            icon={Icons.Person}
            variant="h5"
            element="h3"
            children={Name}
          />
          <Grid container>
            <IconText
              icon={Icons.Phone}
              variant="h5"
              children={Phone}
              href={`tel:${Phone}`}
            />
            <Box marginLeft={2}>
              <IconText
                variant="h5"
                color="textSecondary"
                children={`(${City})`}
              />
            </Box>
          </Grid>
        </CardContent>
        {hasChildren && (
          <ExapndButton
            onExpand={onExpand}
            expanded={expanded}
            childrenCount={childItems.length}
          />
        )}
      </Card>
    </Box>
  );
}

export default connect(
  () => ({}),
  { onRemove: actions.removeContact }
)(ContactCard);

function ExapndButton({ onExpand, expanded, childrenCount }) {
  const [Icon, text] = expanded
    ? [Icons.Less, `Hide Related Contacts (${childrenCount})`]
    : [Icons.More, `Show Related Contacts (${childrenCount})`];

  return (
    <Button onClick={onExpand}>
      {" "}
      <Icon />
      {text}
    </Button>
  );
}
