When using this template, make sure you have your IDE Prettier and ESLint settings set in the following way:

**WebStorm example:**
![webstorm_prettier](https://i.imgur.com/xCCIdDr.png)

![webstorm_eslint](https://i.imgur.com/h4Wu6BO.png)

I would also recommend creating these File Templates for faster component and page creation:

**React component**
![React_component](https://i.imgur.com/XALCFka.png)
_Code:_
```
export default function ${NAME}() {
  return (
    <>
    </>
  );
}
```

<br/>
<br/>
<b>React Page</b>

<u>Page component:</u>
![Page](https://i.imgur.com/w33MwfK.png)
_Code:_
```
export default function ${NAME}() {
  return (
    <>
    </>
  );
}
```

<br/>
<u>Styled components file:</u>

![Styles](https://i.imgur.com/FFzI5u7.png)
_Code:_
```
import styled from "styled-components";

export const TestContainer = styled.div`
	display: flex;
`;
```