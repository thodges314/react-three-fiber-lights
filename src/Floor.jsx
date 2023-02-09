const Floor = () => (
  <mesh rotation-x={-Math.PI / 2} receiveShadow>
    <circleGeometry args={[10]} />
    <meshStandardMaterial />
  </mesh>
);

export default Floor;
