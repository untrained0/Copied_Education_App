import React, { useState } from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import Colors from '../../Utils/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function ContentItem({description, output}) {

    const { width } = useWindowDimensions();
    const [isRun, setIsRun] = useState(false);

    const descriptionSource = {
        html: description
      };

    const outputSource = {
        html: output
    }

  return description&& (
    <View>
        <RenderHtml
      contentWidth={width}
      source={descriptionSource}
      tagsStyles={tagsStyles}

    />
    {output!= null? <TouchableOpacity onPress={() => setIsRun(true)} style={{marginTop: -20, marginBottom: 6}}>
        <Text style={{padding: 12, backgroundColor: Colors.PRIMARY, borderRadius: 10, width: 100, fontSize:15, fontFamily: "outfit", color: Colors.WHITE, textAlign: 'center'}}>Run</Text>
    </TouchableOpacity> : null}

    {isRun?
    <>
    <Text style={{fontFamily: 'outfit-medium', fontSize: 17, marginTop:15 }}>Output</Text>

<RenderHtml
  contentWidth={width}
  source={outputSource}
  tagsStyles={tagsStyles}

/>
</>: null}
    </View>
  )
}

const tagsStyles = {
    body: {
      fontFamily: 'outfit',
      fontSize: 18
    },
   code: {
    backgroundColor: Colors.BLACK,
    color: Colors.WHITE,
    padding:20,
    borderRadius: 15,
   }
  };
