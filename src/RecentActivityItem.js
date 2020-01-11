import React, { useState } from "react";
import styled from "styled-components";
import { Button, Heading, Link, Text, TagPill, Grid, Flex, Stack } from ".";

const StyledGrid = styled(Grid)({
  cursor: "pointer"
});

function RecentActivityItem({
  linkComponent,
  title,
  date,
  type,
  description,
  thumbnail,
  slug,
  tags
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      color="primary"
      boxShadow={isHovered ? "0 0 7px 2px #CCC" : null}
      borderRadius="4px"
      as={linkComponent}
      to={slug}
      // is there a better way to do this
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <StyledGrid
        background="white"
        border="1px solid"
        borderColor={"primary"}
        borderRadius="4px"
        width="800px"
        p={3}
        gridTemplateColumns="1fr 20%"
        gridColumnGap={3}
      >
        <Stack isColumn spacing={3}>
          <Stack isColumn spacing={2}>
            <Heading
              as="h3"
              borderColor="primary"
              borderBottom={isHovered ? "1px solid" : ""}
              marginBottom={isHovered ? "0px" : "1px"}
            >
              {title}
            </Heading>
            <Stack spacing={2} alignItems="center">
              <Flex>
                <Text fontSize={"body"}>{date}</Text>
              </Flex>
              {/* divider here */}
              <Stack spacing={2}>
                {tags.map((tag, index) => {
                  return (
                    <TagPill color="#f0f0f0">
                      <Link as={linkComponent} to={tag.to} color="text.link">
                        <Text fontFamily="content" fontSize={1}>
                          {tag.text}
                        </Text>
                      </Link>
                    </TagPill>
                  );
                })}
              </Stack>
            </Stack>
          </Stack>
          <Text fontSize={"body"}>{description}</Text>
          <Stack>
            <Button backgroundColor="brand" borderColor="primary">
              <Text fontFamily="content" fontSize={"body"} fontWeight={3}>
                Share
              </Text>
            </Button>
          </Stack>
        </Stack>
        <Flex width="100%" height="70%">
          {thumbnail ? thumbnail : null}
        </Flex>
      </StyledGrid>
    </Link>
  );
}

export default RecentActivityItem;
