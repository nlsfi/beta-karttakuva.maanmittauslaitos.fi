<!DOCTYPE qgis PUBLIC 'http://mrcc.com/qgis.dtd' 'SYSTEM'>
<qgis version="3.16.3-Hannover" simplifyAlgorithm="0" styleCategories="AllStyleCategories" minScale="100000000" simplifyDrawingTol="1" simplifyMaxScale="1" readOnly="0" simplifyDrawingHints="0" hasScaleBasedVisibilityFlag="0" maxScale="0" labelsEnabled="0" simplifyLocal="1">
  <flags>
    <Identifiable>1</Identifiable>
    <Removable>1</Removable>
    <Searchable>1</Searchable>
  </flags>
  <temporal enabled="0" mode="0" startField="" endExpression="" accumulate="0" durationField="" durationUnit="min" endField="" startExpression="" fixedDuration="0">
    <fixedRange>
      <start></start>
      <end></end>
    </fixedRange>
  </temporal>
  <renderer-v2 type="singleSymbol" forceraster="0" enableorderby="0" symbollevels="0">
    <symbols>
      <symbol type="marker" alpha="1" force_rhr="0" name="0" clip_to_extent="1">
        <layer enabled="1" locked="0" class="FontMarker" pass="0">
          <prop v="0" k="angle"/>
          <prop v="A" k="chr"/>
          <prop v="16,20,244,255" k="color"/>
          <prop v="Dingbats" k="font"/>
          <prop v="" k="font_style"/>
          <prop v="1" k="horizontal_anchor_point"/>
          <prop v="bevel" k="joinstyle"/>
          <prop v="0,0" k="offset"/>
          <prop v="3x:0,0,0,0,0,0" k="offset_map_unit_scale"/>
          <prop v="MM" k="offset_unit"/>
          <prop v="35,35,35,255" k="outline_color"/>
          <prop v="0" k="outline_width"/>
          <prop v="3x:0,0,0,0,0,0" k="outline_width_map_unit_scale"/>
          <prop v="MM" k="outline_width_unit"/>
          <prop v="2.5" k="size"/>
          <prop v="3x:0,0,0,0,0,0" k="size_map_unit_scale"/>
          <prop v="MM" k="size_unit"/>
          <prop v="1" k="vertical_anchor_point"/>
          <data_defined_properties>
            <Option type="Map">
              <Option type="QString" value="" name="name"/>
              <Option type="Map" name="properties">
                <Option type="Map" name="char">
                  <Option type="bool" value="true" name="active"/>
                  <Option type="QString" value="kiinteistotunnuksenEsitysmuoto" name="field"/>
                  <Option type="int" value="2" name="type"/>
                </Option>
              </Option>
              <Option type="QString" value="collection" name="type"/>
            </Option>
          </data_defined_properties>
        </layer>
      </symbol>
    </symbols>
    <rotation/>
    <sizescale/>
  </renderer-v2>
  <customproperties>
    <property key="embeddedWidgets/count" value="0"/>
    <property key="variableNames"/>
    <property key="variableValues"/>
  </customproperties>
  <blendMode>0</blendMode>
  <featureBlendMode>0</featureBlendMode>
  <layerOpacity>1</layerOpacity>
  <SingleCategoryDiagramRenderer diagramType="Histogram" attributeLegend="1">
    <DiagramCategory height="15" maxScaleDenominator="1e+08" sizeType="MM" labelPlacementMethod="XHeight" spacingUnit="MM" diagramOrientation="Up" rotationOffset="270" backgroundAlpha="255" showAxis="1" lineSizeType="MM" sizeScale="3x:0,0,0,0,0,0" lineSizeScale="3x:0,0,0,0,0,0" width="15" minimumSize="0" spacingUnitScale="3x:0,0,0,0,0,0" scaleDependency="Area" scaleBasedVisibility="0" spacing="5" backgroundColor="#ffffff" penAlpha="255" enabled="0" penColor="#000000" penWidth="0" minScaleDenominator="0" barWidth="5" opacity="1" direction="0">
      <fontProperties description="MS Shell Dlg 2,8.25,-1,5,50,0,0,0,0,0" style=""/>
      <axisSymbol>
        <symbol type="line" alpha="1" force_rhr="0" name="" clip_to_extent="1">
          <layer enabled="1" locked="0" class="SimpleLine" pass="0">
            <prop v="0" k="align_dash_pattern"/>
            <prop v="square" k="capstyle"/>
            <prop v="5;2" k="customdash"/>
            <prop v="3x:0,0,0,0,0,0" k="customdash_map_unit_scale"/>
            <prop v="MM" k="customdash_unit"/>
            <prop v="0" k="dash_pattern_offset"/>
            <prop v="3x:0,0,0,0,0,0" k="dash_pattern_offset_map_unit_scale"/>
            <prop v="MM" k="dash_pattern_offset_unit"/>
            <prop v="0" k="draw_inside_polygon"/>
            <prop v="bevel" k="joinstyle"/>
            <prop v="35,35,35,255" k="line_color"/>
            <prop v="solid" k="line_style"/>
            <prop v="0.26" k="line_width"/>
            <prop v="MM" k="line_width_unit"/>
            <prop v="0" k="offset"/>
            <prop v="3x:0,0,0,0,0,0" k="offset_map_unit_scale"/>
            <prop v="MM" k="offset_unit"/>
            <prop v="0" k="ring_filter"/>
            <prop v="0" k="tweak_dash_pattern_on_corners"/>
            <prop v="0" k="use_custom_dash"/>
            <prop v="3x:0,0,0,0,0,0" k="width_map_unit_scale"/>
            <data_defined_properties>
              <Option type="Map">
                <Option type="QString" value="" name="name"/>
                <Option name="properties"/>
                <Option type="QString" value="collection" name="type"/>
              </Option>
            </data_defined_properties>
          </layer>
        </symbol>
      </axisSymbol>
    </DiagramCategory>
  </SingleCategoryDiagramRenderer>
  <DiagramLayerSettings priority="0" obstacle="0" showAll="1" dist="0" placement="0" zIndex="0" linePlacementFlags="18">
    <properties>
      <Option type="Map">
        <Option type="QString" value="" name="name"/>
        <Option name="properties"/>
        <Option type="QString" value="collection" name="type"/>
      </Option>
    </properties>
  </DiagramLayerSettings>
  <geometryOptions removeDuplicateNodes="0" geometryPrecision="0">
    <activeChecks/>
    <checkConfiguration/>
  </geometryOptions>
  <legend type="default-vector"/>
  <referencedLayers/>
  <fieldConfiguration>
    <field configurationFlags="None" name="kiinteistotunnus">
      <editWidget type="TextEdit">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="kiinteistotunnuksenEsitysmuoto">
      <editWidget type="TextEdit">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
    <field configurationFlags="None" name="suhdePeruskiinteistoon">
      <editWidget type="Range">
        <config>
          <Option/>
        </config>
      </editWidget>
    </field>
  </fieldConfiguration>
  <aliases>
    <alias field="kiinteistotunnus" index="0" name=""/>
    <alias field="kiinteistotunnuksenEsitysmuoto" index="1" name=""/>
    <alias field="suhdePeruskiinteistoon" index="2" name=""/>
  </aliases>
  <defaults>
    <default applyOnUpdate="0" field="kiinteistotunnus" expression=""/>
    <default applyOnUpdate="0" field="kiinteistotunnuksenEsitysmuoto" expression=""/>
    <default applyOnUpdate="0" field="suhdePeruskiinteistoon" expression=""/>
  </defaults>
  <constraints>
    <constraint field="kiinteistotunnus" constraints="0" exp_strength="0" unique_strength="0" notnull_strength="0"/>
    <constraint field="kiinteistotunnuksenEsitysmuoto" constraints="0" exp_strength="0" unique_strength="0" notnull_strength="0"/>
    <constraint field="suhdePeruskiinteistoon" constraints="0" exp_strength="0" unique_strength="0" notnull_strength="0"/>
  </constraints>
  <constraintExpressions>
    <constraint field="kiinteistotunnus" desc="" exp=""/>
    <constraint field="kiinteistotunnuksenEsitysmuoto" desc="" exp=""/>
    <constraint field="suhdePeruskiinteistoon" desc="" exp=""/>
  </constraintExpressions>
  <expressionfields/>
  <attributeactions>
    <defaultAction key="Canvas" value="{00000000-0000-0000-0000-000000000000}"/>
  </attributeactions>
  <attributetableconfig sortExpression="" actionWidgetStyle="dropDown" sortOrder="0">
    <columns>
      <column hidden="0" type="field" width="-1" name="kiinteistotunnus"/>
      <column hidden="0" type="field" width="-1" name="kiinteistotunnuksenEsitysmuoto"/>
      <column hidden="0" type="field" width="-1" name="suhdePeruskiinteistoon"/>
      <column hidden="1" type="actions" width="-1"/>
    </columns>
  </attributetableconfig>
  <conditionalstyles>
    <rowstyles/>
    <fieldstyles/>
  </conditionalstyles>
  <storedexpressions/>
  <editform tolerant="1"></editform>
  <editforminit/>
  <editforminitcodesource>0</editforminitcodesource>
  <editforminitfilepath></editforminitfilepath>
  <editforminitcode><![CDATA[# -*- coding: utf-8 -*-
"""
QGIS forms can have a Python function that is called when the form is
opened.

Use this function to add extra logic to your forms.

Enter the name of the function in the "Python Init function"
field.
An example follows:
"""
from qgis.PyQt.QtWidgets import QWidget

def my_form_open(dialog, layer, feature):
	geom = feature.geometry()
	control = dialog.findChild(QWidget, "MyLineEdit")
]]></editforminitcode>
  <featformsuppress>0</featformsuppress>
  <editorlayout>generatedlayout</editorlayout>
  <editable>
    <field editable="1" name="kiinteistotunnuksenEsitysmuoto"/>
    <field editable="1" name="kiinteistotunnus"/>
    <field editable="1" name="suhdePeruskiinteistoon"/>
  </editable>
  <labelOnTop>
    <field labelOnTop="0" name="kiinteistotunnuksenEsitysmuoto"/>
    <field labelOnTop="0" name="kiinteistotunnus"/>
    <field labelOnTop="0" name="suhdePeruskiinteistoon"/>
  </labelOnTop>
  <dataDefinedFieldProperties/>
  <widgets/>
  <previewExpression>"kiinteistotunnus"</previewExpression>
  <mapTip></mapTip>
  <layerGeometryType>0</layerGeometryType>
</qgis>
