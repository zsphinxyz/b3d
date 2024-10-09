import { Grid } from "@react-three/drei";

export default function BlenderGrid() {
  return (
    <group>
        <Grid position={[0, 0.01, 0]} args={[0.02, 100]} 
            cellSize={0} 
            cellThickness={0.7}
            sectionSize={100} 
            sectionThickness={1.3}
            sectionColor={'#8BDC00'}
            fadeDistance={20}
            fadeStrength={1}
            side= {2}
          />
          <Grid position={[0, 0, 0]} args={[100, 0.02]} 
            cellSize={0} 
            cellThickness={0.7}
            sectionSize={100} 
            sectionThickness={1.3}
            sectionColor={'#FF3352'}
            fadeDistance={20}
            fadeStrength={1}
            side= {2}
          />

          <Grid position={[0, 0, 0]} args={[100, 100]} 
            cellSize={0.5} 
            cellThickness={0.7} 
            cellColor={'#545454'} 
            sectionSize={0} 
            sectionThickness={0}
            fadeDistance={20}
            fadeStrength={1}
            side= {2}
          />
    </group>
  )
}
