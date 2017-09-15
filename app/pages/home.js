import React from "react";
import { View } from "react-native";
import {
  Container,
  Content,
  Button,
  Text
} from "native-base";
import { connect } from "react-redux";
import { beginning } from "../actions";

const Tab1 = (props) => {
  const { posts, isFetching } = props.posts;

  return(
    <Container>
      <Content>

          <Button onPress={() => props.getData()}>
            <Text> Load Data</Text>
          </Button>
          {
            isFetching && <Text>Loading....</Text>
          }
          {
           posts.length ? (
             posts.map((post, i) => {
               return <View key={i} >
                 <Text>Title: {post.title}</Text>
                 <Text>Body:{post.body}</Text>
               </View>
             })
           ) : null
         }
      </Content>
    </Container>
  )
}

function mapStateToProps (state) {
  return {
    posts: state.postReducer
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getData: () => dispatch(beginning())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tab1)
// export default class Tab1 extends Component {
//   constructor(){
//     super(props);
//   }
//
//   render(){
//
//   }
// }
